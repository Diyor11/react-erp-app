export const localUrl = 'http://localhost:8080/api/'
// export const localUrl = 'https://dev-server.idurarapp.com/api/'

export const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://crm-server-a1ylyjnb7-diyor11.vercel.app/api'
    : localUrl;
export const DOWNLOAD_BASE_URL =
  process.env.NODE_ENV === 'production' || process.env.REACT_APP_DEV_REMOTE == 'remote'
    ? 'https://crm-server-a1ylyjnb7-diyor11.vercel.app/download/'
    : localUrl;
export const ACCESS_TOKEN_NAME = 'x-auth-token';

