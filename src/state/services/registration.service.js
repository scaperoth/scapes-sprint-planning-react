import { fakeLatency } from './helpers';

export const registerUser = async username => {
  await fakeLatency(1000, 3000);

  if (username === 'test') {
    return Promise.reject(new Error('TEST'));
  }
  return {};
};
