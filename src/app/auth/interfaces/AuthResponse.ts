import { UserI } from "./UserResponseI";

export interface AuthResponse {
}

export interface UserResponseI {
  user:  UserI;
  token: string;
}
