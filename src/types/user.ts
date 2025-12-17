export interface IUser {
  login: string;
  password: string;
}

export interface ILogin {
  user: { id: number; login: string };
}
