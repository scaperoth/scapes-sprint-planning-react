import { fakeLatency } from './helpers';

export const login = async () => {
  await fakeLatency(1000, 3000);
  return {};
};
