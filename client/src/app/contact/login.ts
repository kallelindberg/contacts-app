export class Login {

  private _userId: string;
  private _password: string;

  constructor(userId?: string, password?: string) {
    this._userId = userId;
    this._password = password;
  }

  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    this._userId = value;
  }

  get password(): string {
    return this._password
  }
  set password(value: string) {
    this._password = value;
  }
}
