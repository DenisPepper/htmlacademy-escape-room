const AUTH_TOKEN_KEY = 'auth-token-key';

export const getToken = (): string => localStorage.getItem(AUTH_TOKEN_KEY) ?? '';

export const saveToken = (token: string): void => localStorage.setItem(AUTH_TOKEN_KEY, token);

export const dropToken = (): void => localStorage.removeItem(AUTH_TOKEN_KEY);
