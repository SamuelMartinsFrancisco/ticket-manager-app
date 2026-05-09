import { api } from "../api-client/api";
import { LoginPayload, LoginResponse, RegisterPayload, RegisterResponse } from "./auth.types";

export class AuthService {
  async login(payload: LoginPayload): Promise<LoginResponse> {
    const response: LoginResponse = await api.post('auth/login', payload);

    return response;
  }

  async register(payload: RegisterPayload): Promise<RegisterResponse> {
    const response: RegisterResponse = await api.post('auth/register', payload);

    return response;
  }
};
