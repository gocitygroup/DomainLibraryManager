import ENV from './env';

/**
 * Security module for IP filtering and security headers
 */

// Types for IP filtering
export interface IpAccessConfig {
  allowedIps: string[];
  allowedCidrs: string[];
  isAllowAll: boolean;
}

// Default IP access configuration
const defaultIpConfig: IpAccessConfig = {
  allowedIps: ENV.ALLOWED_IPS,
  allowedCidrs: ENV.ALLOWED_CIDRS,
  isAllowAll: ENV.ALLOWED_IPS.includes('*')
};

let ipConfig = { ...defaultIpConfig };

/**
 * Configure IP access settings
 */
export function configureIpAccess(config: Partial<IpAccessConfig>) {
  ipConfig = {
    ...defaultIpConfig,
    ...config
  };
}

/**
 * Check if an IP address is allowed
 */
export function isIpAllowed(ip: string): boolean {
  // Allow all IPs if configured to do so
  if (ipConfig.isAllowAll) {
    return true;
  }
  
  // Check if IP is explicitly allowed
  if (ipConfig.allowedIps.includes(ip)) {
    return true;
  }
  
  // Check CIDR ranges if any are configured
  if (ipConfig.allowedCidrs.length > 0) {
    // This would require a CIDR checking library
    // For simplicity, we'll return false here
    // In a real implementation, you would use a library like 'ip-range-check'
    return false;
  }
  
  return false;
}

/**
 * Get security headers based on configuration
 */
export function getSecurityHeaders(): Record<string, string> {
  if (!ENV.SECURITY_HEADERS_ENABLED) {
    return {};
  }
  
  return {
    'Content-Security-Policy': ENV.CONTENT_SECURITY_POLICY,
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Referrer-Policy': 'no-referrer-when-downgrade',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=()'
  };
}

/**
 * Get the current IP access configuration
 */
export function getIpAccessConfig(): IpAccessConfig {
  return { ...ipConfig };
} 