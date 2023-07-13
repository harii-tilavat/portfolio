export class User {
  constructor(public email: string, public id: string, private _token: string, private _tokenExpirationDate: Date | string) { }
  get token(): string {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return '';
    } else {
      return this._token;
    }
  }
}
export class UserModel{
  public email!: string;
  public id!: string;
  public _token!: string;
  public _tokenExpirationDate!: Date | string
}
