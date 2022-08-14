import configOnline from './config-online';
import configLocal from './config-local';

// eslint-disable-next-line import/no-mutable-exports
let config: typeof configLocal | typeof configOnline;

if (process.env.NODE_ENV === 'development') {
  config = configLocal;
} else {
  config = configOnline;
}

export default config;
