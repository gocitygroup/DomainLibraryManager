# Detailed Configuration Guide

This document provides comprehensive information about configuring the Programming Language Manager application for different deployment scenarios.

## Environment Variables

All application settings can be configured through environment variables in your `.env` file. Below is a complete reference of all supported variables.

### Core Server Settings

| Variable | Description | Default | Example |
|----------|-------------|---------|---------|
| `VITE_APP_HOST` | Host to bind the server to | `0.0.0.0` | `100.99.65.21` |
| `VITE_APP_PORT` | Port for the application server | `3000` | `9876` |

### Network & Security

| Variable | Description | Default | Example |
|----------|-------------|---------|---------|
| `VITE_APP_ALLOWED_ORIGINS` | Comma-separated list of allowed origins for CORS | `localhost,127.0.0.1` | `app.example.com,api.example.com` |
| `VITE_APP_ALLOWED_IPS` | Comma-separated list of allowed IP addresses | `*` | `192.168.1.0/24,10.0.0.1` |
| `VITE_APP_ALLOWED_CIDRS` | Comma-separated list of allowed CIDR blocks | `` | `10.0.0.0/8,172.16.0.0/12` |

### VPN Configuration

| Variable | Description | Default | Example |
|----------|-------------|---------|---------|
| `VITE_APP_VPN_ENABLED` | Enable VPN-specific configurations | `false` | `true` |
| `VITE_APP_VPN_NETWORK` | Specify VPN network range | `` | `10.8.0.0/24` |

### Security Headers

| Variable | Description | Default | Example |
|----------|-------------|---------|---------|
| `VITE_APP_SECURITY_HEADERS_ENABLED` | Enable security headers | `true` | `true` |
| `VITE_APP_CONTENT_SECURITY_POLICY` | Custom Content Security Policy | `default-src 'self'; img-src 'self' data:;` | `default-src 'self'; img-src 'self' data: example.com;` |

### Application Settings

| Variable | Description | Default | Example |
|----------|-------------|---------|---------|
| `VITE_APP_API_PREFIX` | Prefix for API routes | `/api` | `/v1/api` |
| `VITE_APP_API_VERSION` | API version | `v1` | `v2` |
| `VITE_APP_CACHE_TTL` | Cache TTL in seconds | `3600` | `7200` |
| `VITE_APP_LOG_LEVEL` | Log level | `info` | `debug` |

## Deployment Scenarios

### Internal Network Deployment

For internal network deployment, consider the following configuration:

```env
VITE_APP_HOST=0.0.0.0
VITE_APP_PORT=9876
VITE_APP_ALLOWED_ORIGINS=internal.example.com,localhost
VITE_APP_ALLOWED_IPS=192.168.1.0/24,10.0.0.0/8
```

This configuration:
- Binds to all network interfaces (`0.0.0.0`)
- Only allows specific internal domains to access the API
- Restricts access to specific IP ranges

### VPN Deployment

For VPN deployment, use this configuration:

```env
VITE_APP_HOST=100.99.65.21
VITE_APP_PORT=9876
VITE_APP_VPN_ENABLED=true
VITE_APP_VPN_NETWORK=10.8.0.0/24
VITE_APP_ALLOWED_IPS=10.8.0.0/24
```

This configuration:
- Binds to a specific VPN IP address
- Enables VPN-specific optimizations
- Restricts access to only clients within the VPN network

### High-Security Environment

For a high-security deployment:

```env
VITE_APP_HOST=0.0.0.0
VITE_APP_PORT=9876
VITE_APP_ALLOWED_ORIGINS=secure.example.com
VITE_APP_ALLOWED_IPS=10.0.0.0/8
VITE_APP_SECURITY_HEADERS_ENABLED=true
VITE_APP_CONTENT_SECURITY_POLICY="default-src 'self'; script-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'"
```

This configuration:
- Enforces strict security headers
- Implements a restrictive Content Security Policy
- Limits access to specific origins and IP ranges

## Docker Configuration

The application uses different port mappings for development and production containers:

### Development Container

```yaml
ports:
  - "9876:${VITE_APP_PORT:-3000}"
```

This maps the container's internal port to 9876 on the host machine.

### Production Container

```yaml
ports:
  - "9877:${VITE_APP_PORT:-3000}"
```

This maps the container's internal port to 9877 on the host machine.

## Network Binding Logic

The application has smart binding logic for handling network interfaces:

1. When running directly in development mode, the application tries to bind to the specified `VITE_APP_HOST`
2. When running in Docker, the application automatically binds to `0.0.0.0` internally and uses port mapping
3. If a specified IP address is unavailable, the application automatically falls back to `0.0.0.0`

This ensures the application works well across different environments.

## Advanced Configuration

### Customizing Security Headers

The application adds several security headers by default. You can customize these by modifying the `getSecurityHeaders` function in `src/config/security.ts`.

### CORS Configuration

CORS settings are configured in `src/config/cors.ts` and determine which origins can access your application. The default configuration allows requests from the origins specified in `VITE_APP_ALLOWED_ORIGINS`.

### IP-based Access Control

The application can restrict access based on IP addresses through the `isIpAllowed` function in `src/config/security.ts`. This is useful for limiting access to specific network ranges or VPN clients.

## Troubleshooting

### Port Conflicts

If you encounter port conflicts, try:

1. Changing the port in your `.env` file
2. Updating the port mappings in `docker-compose.yml`
3. Checking if any other services are using the same port with `netstat -ano | findstr :<port>`

### IP Binding Issues

If the application fails to bind to a specific IP, it will automatically fall back to `0.0.0.0`. This is logged in the console. You can:

1. Verify the IP address exists on your machine
2. Use `0.0.0.0` to bind to all interfaces
3. Check network interface status with `ipconfig` (Windows) or `ifconfig` (Linux/Mac)

### Security Header Conflicts

If you experience issues with security headers:

1. Disable them temporarily with `VITE_APP_SECURITY_HEADERS_ENABLED=false`
2. Customize the Content Security Policy to allow necessary resources
3. Check browser console for CSP violation reports 