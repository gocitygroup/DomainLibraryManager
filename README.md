# Programming Language Manager

A comprehensive React component library for managing, exploring, and visualizing programming languages, innovation areas, and technology domains. Perfect for educational platforms, technology catalogs, and innovation tracking systems.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🚀 Features

- **Multi-space Dashboard**: Navigate between Programming Languages, Innovation Areas, and Technology Domains
- **Comprehensive Data Models**: Detailed information on programming languages with metrics like learning curve, industry demand, and investment requirements
- **Responsive Design**: Mobile-friendly interface with dark mode support
- **Search & Filter**: Powerful filtering options for finding specific technologies
- **Customizable Configuration**: Environment variable-driven setup for deployment flexibility
- **Secure Deployment**: CORS, IP-based access control and security headers
- **VPN & Internal Network Ready**: Designed for deployment in private networks and VPN environments

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Bundler**: Vite
- **State Management**: React Hooks with localStorage persistence
- **Deployment**: Docker with multi-stage builds for development and production
- **Server**: Custom Node.js HTTP server for production

## 🔧 Environment Configuration

Create a `.env` file in the root directory with the following variables:

```bash
# Server Configuration
VITE_APP_HOST=0.0.0.0             # The host to bind to (0.0.0.0 for all interfaces)
VITE_APP_PORT=9876                # The port to listen on

# Network Security
VITE_APP_ALLOWED_ORIGINS=localhost,127.0.0.1  # Comma-separated list of allowed origins for CORS

# IP Access Control
VITE_APP_ALLOWED_IPS=*            # Comma-separated list of allowed IP addresses, * for all

# VPN Configuration
VITE_APP_VPN_ENABLED=true         # Enable VPN-specific settings
```

For more detailed configuration options, see [CONFIGURATION.md](CONFIGURATION.md).

## 🚢 Deployment Options

### Vercel (Static Hosting)

This project can be deployed to Vercel as a static Vite application.

- **Framework Preset**: Vite
- **Install Command**: `npm install`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

Note: `vite.config.ts` defaults to an **application build** (emits `dist/index.html`) which is required for Vercel. If you ever need the previous **library build** output, set `VITE_BUILD_TARGET=lib` (or `BUILD_TARGET=lib`) before running `npm run build`.

### Development with Docker

```bash
# Build the development container
docker compose build app

# Start the development environment
docker compose up app
```

The development server will be available at `http://localhost:9876` with hot-reload enabled.

### Production with Docker

```bash
# Build the production container
docker compose build prod

# Start the production environment
docker compose up prod
```

The production server will be available at `http://localhost:9877`.

### Manual Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Manual Production Setup

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Serve production build
npm run serve
```

## 🔒 Security Considerations

The application includes several security features for internal deployment:

1. **IP-based Access Control**: Restrict access to specific IP addresses or ranges
2. **CORS Configuration**: Control which origins can access your API
3. **Security Headers**: Default security headers for protection against common web vulnerabilities
4. **VPN Compatibility**: Special configurations for VPN deployments

## 🌐 Network Configuration

When running in Docker, the application automatically adapts to network constraints:

- In development, it binds to 0.0.0.0 inside the container but exposes the configured host externally
- For VPN deployments, set `VITE_APP_VPN_ENABLED=true` to enable VPN-specific optimizations
- If a specific IP address is unavailable, the system will automatically fall back to 0.0.0.0

## 💡 Usage Examples

```jsx
// Basic usage
import ProgrammingLanguageManager from 'programming-language-manager';

function App() {
  return <ProgrammingLanguageManager />;
}

// With custom configuration
function CustomApp() {
  const handleLanguageAdd = (language) => {
    console.log('New language added:', language);
    // Custom logic here
  };

  return (
    <ProgrammingLanguageManager 
      storageKey="custom-languages"
      onLanguageAdd={handleLanguageAdd}
      allowedOrigins={['yourdomain.com']}
    />
  );
}
```

## 📚 Data Structures

The application manages three primary data types:

1. **Programming Languages**: Languages with details on use cases, learning curves, and features
2. **Innovation Areas**: Emerging technology areas like AI, Quantum Computing, and GreenTech
3. **Technology Domains**: Detailed domains with industry-specific information

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.