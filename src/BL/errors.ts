export class UserError extends Error {
  constructor(msg: string, code: number) {
    super(msg);
    code = code;
  }
}
