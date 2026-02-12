import ENV from './env';

export interface CorsConfig {
  allowedOrigins: string[];
  defaultOrigin: string;
}

const defaultConfig: CorsConfig = {
  allowedOrigins: ENV.ALLOWED_ORIGINS,
  defaultOrigin: ENV.ALLOWED_ORIGINS.join(',')
};

let corsConfig = { ...defaultConfig };

export function configureCors(config: Partial<CorsConfig>) {
  corsConfig = {
    ...defaultConfig,
    ...config
  };
}

export function isOriginAllowed(origin: string): boolean {
  if (corsConfig.allowedOrigins.includes('*')) {
    return true;
  }
  return corsConfig.allowedOrigins.includes(origin);
}

export function getCorsConfig(): CorsConfig {
  return { ...corsConfig };
}