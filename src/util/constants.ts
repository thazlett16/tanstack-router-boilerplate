const VITE_APP_API_URI = import.meta.env.VITE_APP_API_URI;

export const API_BASE_URL = VITE_APP_API_URI
    ? `${VITE_APP_API_URI}/api`
    : 'https://pokeapi.co/api';
