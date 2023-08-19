export const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://crm-server-a1ylyjnb7-diyor11.vercel.app/api'
    : 'https://crm-server-a1ylyjnb7-diyor11.vercel.app/api';
export const DOWNLOAD_BASE_URL =
  process.env.NODE_ENV === 'production' || process.env.REACT_APP_DEV_REMOTE == 'remote'
    ? 'https://crm-server-a1ylyjnb7-diyor11.vercel.app/download/'
    : 'https://crm-server-a1ylyjnb7-diyor11.vercel.app/download/';
export const ACCESS_TOKEN_NAME = 'x-auth-token';
console.log(process.env.REACT_APP_NODE_ENV);
console.log(process.env.NODE_ENV);
