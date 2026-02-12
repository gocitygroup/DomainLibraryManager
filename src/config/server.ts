import ENV from './env';

/**
 * Server configuration module
 */

// Declare process for TypeScript
declare const process: {
  env: Record<string, string | undefined>;
};

export interface ServerConfig {
  host: string;
  port: number;
  url: string;
  fallbackHost?: string;
}

// Create default server configuration with environment variables
const defaultConfig: ServerConfig = {
  host: ENV.HOST,
  port: ENV.PORT,
  url: `http://${ENV.HOST}:${ENV.PORT}`,
  fallbackHost: '0.0.0.0'  // Default fallback is to listen on all interfaces
};

let serverConfig = { ...defaultConfig };

/**
 * Configure server settings
 */
export function configureServer(config: Partial<ServerConfig>) {
  serverConfig = {
    ...defaultConfig,
    ...config,
    // Rebuild URL if host or port changes
    url: config.url || `http://${config.host || defaultConfig.host}:${config.port || defaultConfig.port}`
  };
}

/**
 * Get the current server configuration
 */
export function getServerConfig(): ServerConfig {
  return { ...serverConfig };
}

/**
 * Get the listening address string for the server
 */
export function getListeningAddress(): string {
  return `${serverConfig.host}:${serverConfig.port}`;
}

/**
 * Check if the server is configured to listen on all interfaces
 */
export function isListeningOnAllInterfaces(): boolean {
  return serverConfig.host === '0.0.0.0';
}

/**
 * Get an object with host and port for Vite configuration
 * 
 * This function provides a safe configuration for Vite by:
 * 1. Using the configured host if available
 * 2. Falling back to 0.0.0.0 if the configured host is unavailable in the current environment
 */
export function getViteServerOptions() {
  // For Docker/containerized environments, always use 0.0.0.0 for internal binding
  const effectiveHost = ENV.IS_PRODUCTION || process.env.DOCKER_CONTAINER === 'true' 
    ? '0.0.0.0' 
    : serverConfig.host;

  return {
    host: effectiveHost,
    port: serverConfig.port,
    // Add additional options for better error handling with specific IPs
    strictPort: true,
    hmr: {
      // HMR fallback options if specific IP binding fails
      host: effectiveHost,
      port: serverConfig.port
    }
  };
} 