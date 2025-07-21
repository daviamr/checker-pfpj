import type { ILogin, ILoginResponse } from "../interfaces/auth";
import { api } from "./api";

export class AuthService {
  async login({ ...payload }: ILogin): Promise<ILoginResponse> {
    const response = await api.post('/login', { ...payload })
    return response.data
  }
}