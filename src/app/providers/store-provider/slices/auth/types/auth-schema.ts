export interface AuthSchema {
  authorizationStatus: 'YES' | 'NO' | 'UNKNOWN';
  userName: string;
}

export interface LoginData {
  email: string;
  token: string;
}
