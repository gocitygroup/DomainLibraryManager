/**
 * Environment Configuration Module
 * 
 * Centralizes all environment-based configuration for the application,
 * making it easy to manage and update settings across different environments.
 */

// Default values are provided as fallbacks
const ENV = {
  // Server settings
  HOST: import.meta.env.VITE_APP_HOST || '0.0.0.0',
  PORT: parseInt(import.meta.env.VITE_APP_PORT || '3000', 10),
  
  // Network and security settings
  ALLOWED_ORIGINS: (import.meta.env.VITE_APP_ALLOWED_ORIGINS || 'localhost,127.0.0.1').split(','),
  ALLOWED_IPS: (import.meta.env.VITE_APP_ALLOWED_IPS || '*').split(','),
  ALLOWED_CIDRS: (import.meta.env.VITE_APP_ALLOWED_CIDRS || '').split(',').filter(Boolean),
  
  // VPN Configuration
  VPN_ENABLED: import.meta.env.VITE_APP_VPN_ENABLED === 'true',
  VPN_NETWORK: import.meta.env.VITE_APP_VPN_NETWORK || '',
  
  // Security Headers
  SECURITY_HEADERS_ENABLED: import.meta.env.VITE_APP_SECURITY_HEADERS_ENABLED !== 'false',
  CONTENT_SECURITY_POLICY: import.meta.env.VITE_APP_CONTENT_SECURITY_POLICY || "default-src 'self'; img-src 'self' data:;",
  
  // Application settings
  NODE_ENV: import.meta.env.NODE_ENV || 'development',
  IS_PRODUCTION: import.meta.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: import.meta.env.NODE_ENV === 'development',
  
  // API settings
  API_PREFIX: import.meta.env.VITE_APP_API_PREFIX || '/api',
  API_VERSION: import.meta.env.VITE_APP_API_VERSION || 'v1',
  
  // Cache settings
  CACHE_TTL: parseInt(import.meta.env.VITE_APP_CACHE_TTL || '3600', 10),
  
  // Log settings
  LOG_LEVEL: import.meta.env.VITE_APP_LOG_LEVEL || 'info',
};

export default ENV; 