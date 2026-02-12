import ENV from './env';
import { configureCors, isOriginAllowed, getCorsConfig } from './cors';
import { configureIpAccess, isIpAllowed, getSecurityHeaders, getIpAccessConfig } from './security';
import { configureServer, getServerConfig, getListeningAddress, isListeningOnAllInterfaces, getViteServerOptions } from './server';

/**
 * Centralized configuration exports
 */

// Re-export individual modules
export { ENV };
export { configureCors, isOriginAllowed, getCorsConfig };
export { configureIpAccess, isIpAllowed, getSecurityHeaders, getIpAccessConfig };
export { configureServer, getServerConfig, getListeningAddress, isListeningOnAllInterfaces, getViteServerOptions };

// Export a consolidated configuration object
export const Config = {
  ENV,
  cors: {
    configure: configureCors,
    isOriginAllowed,
    getConfig: getCorsConfig
  },
  security: {
    configureIpAccess,
    isIpAllowed,
    getSecurityHeaders,
    getIpAccessConfig
  },
  server: {
    configure: configureServer,
    getConfig: getServerConfig,
    getListeningAddress,
    isListeningOnAllInterfaces,
    getViteServerOptions
  }
};

export default Config; 