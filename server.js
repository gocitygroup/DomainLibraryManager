import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join, extname } from 'path';
import { createReadStream } from 'fs';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get configuration from environment variables
// Inside Docker, always use 0.0.0.0 to bind to all interfaces
const isDocker = process.env.DOCKER_CONTAINER === 'true';
const HOST = isDocker ? '0.0.0.0' : (process.env.VITE_APP_HOST || '0.0.0.0');
const PORT = process.env.VITE_APP_PORT || 3000;

// MIME types for different file extensions
const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf'
};

// Create HTTP server
const server = createServer(async (req, res) => {
  console.log(`${req.method} ${req.url}`);
  
  try {
    // Parse URL
    const url = new URL(req.url, `http://${req.headers.host}`);
    let filePath = url.pathname;
    
    // Default to index.html for root path
    if (filePath === '/') {
      filePath = '/index.html';
    }
    
    // Build the full path to the file in the dist directory
    const fullPath = join(__dirname, 'dist', filePath);
    
    // Get file extension
    const ext = extname(filePath);
    
    // Set content type based on file extension
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    // Stream the file to the response
    const fileStream = createReadStream(fullPath);
    
    res.setHeader('Content-Type', contentType);
    
    // Add security headers
    if (process.env.VITE_APP_SECURITY_HEADERS_ENABLED !== 'false') {
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('X-Frame-Options', 'DENY');
      res.setHeader('X-XSS-Protection', '1; mode=block');
      if (process.env.VITE_APP_CONTENT_SECURITY_POLICY) {
        res.setHeader('Content-Security-Policy', process.env.VITE_APP_CONTENT_SECURITY_POLICY);
      }
    }
    
    // Stream the file
    fileStream.pipe(res);
    
    // Handle file stream errors
    fileStream.on('error', (err) => {
      if (err.code === 'ENOENT') {
        res.statusCode = 404;
        res.end('File not found');
      } else {
        res.statusCode = 500;
        res.end('Internal server error');
      }
    });
    
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end('Internal server error');
  }
});

// Start the server
server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${PORT}/`);
}); 