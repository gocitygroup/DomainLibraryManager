import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import type { ServerOptions } from 'vite';
import { networkInterfaces } from 'os';

/**
 * Check if an IP address is available on the current machine
 */
function isIpAddressAvailable(ipAddress: string): boolean {
  // Always consider 0.0.0.0 (all interfaces) as available
  if (ipAddress === '0.0.0.0' || ipAddress === 'localhost' || ipAddress === '127.0.0.1') {
    return true;
  }

  // Get all network interfaces
  const interfaces = networkInterfaces();
  
  // Check if any interface has the specified IP
  return Object.values(interfaces).some(
    iface => iface?.some(addr => addr.address === ipAddress)
  );
}

/**
 * Generate server configuration for Vite
 */
function createServerConfig(env: Record<string, string>): ServerOptions {
  const HOST = env.VITE_APP_HOST || '0.0.0.0';
  const PORT = parseInt(env.VITE_APP_PORT || '3000', 10);
  
  // Check if the configured host is available
  const isHostAvailable = isIpAddressAvailable(HOST);
  
  // Use fallback if IP is not available
  const effectiveHost = isHostAvailable ? HOST : '0.0.0.0';
  
  // If using fallback, log a warning
  if (!isHostAvailable && HOST !== '0.0.0.0') {
    console.warn(`Warning: Configured IP address ${HOST} is not available on this machine. Falling back to 0.0.0.0`);
  }
  
  // Configure CORS
  const corsOrigins = (env.VITE_APP_ALLOWED_ORIGINS || 'localhost,127.0.0.1').split(',');
  const CORS = { 
    origin: corsOrigins.includes('*') ? '*' : corsOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  };

  return {
    host: effectiveHost,
    port: PORT,
    strictPort: true,
    watch: {
      usePolling: true
    },
    cors: CORS,
    headers: {
      // Basic security headers for development
      'X-Content-Type-Options': 'nosniff'
    },
    // Add better error handling
    hmr: {
      host: effectiveHost,
      port: PORT
    }
  };
}

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '');
  const serverConfig = createServerConfig(env);

  return {
    plugins: [react()],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'ProgrammingLanguageManager',
        fileName: 'index',
        formats: ['es', 'umd']
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          }
        }
      }
    },
    optimizeDeps: {
      exclude: ['lucide-react']
    },
    server: serverConfig,
    preview: serverConfig
  };
});