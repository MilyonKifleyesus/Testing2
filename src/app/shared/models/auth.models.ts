export interface LoginRequest {
  usernameOrEmail: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  expiresInSeconds: number;
  role: string;         
  type: number;
  userId: number;
  username: string;
  email?: string;
  clientId: number;
  isGeneralAdmin: boolean;
}
