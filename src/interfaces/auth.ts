export interface ILogin {
  user: string,
  pass: string
}

export interface ILoginResponse {
  token: string,
  user: {
    name: string
    email: string
  }
}