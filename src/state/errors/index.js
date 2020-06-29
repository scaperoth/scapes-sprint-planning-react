export class AuthError extends Error {
  constructor(err) {
    super(err.message);
    this.fields = {};
    this.parseError(err);
  }

  parseError(err) {
    if (!err.code) {
      this.fields.global = err.message;
      return;
    }

    const { message, code } = err;
    if (code.includes('email')) {
      this.fields.email = 'Invalid email address';
    } else if (code.includes('password')) {
      this.fields.password = message;
    }
  }
}
