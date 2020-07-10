const CUSTOM_MESSAGES = {
  CONNECTION_ERROR:
    'Unable to connect to service. Please check your connection or try again later.',
};

export default class ServerError extends Error {
  constructor(err) {
    super(err.message);
    this.parseError(err);
  }

  parseError(err) {
    if (!err.response) {
      this.message = CUSTOM_MESSAGES.CONNECTION_ERROR;
    }
  }
}
