export class User {
  constructor(
    public emailOrNumber: string,
    public _id: string,
    public _roles:string,
    private _token: string,
    private _tokenExprirationDate: Date
  ) {}
  get token() {
    if (
      !this._tokenExprirationDate ||
      new Date() > this._tokenExprirationDate
    ) {
      return null;
    }
    return this._token;
  }
}

// type of response User
// completed: boolean,
// createdAt: string ,
// emailOrPhoneNumber: string, 
// password: string,
// roles: "user",
// unhashedPassword: string,
// _id: string,