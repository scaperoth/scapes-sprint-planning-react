export const buildActionRequests = actionTypeName => {
  const pending = {
    type: `${actionTypeName}_PENDING`,
  };
  const fulfilled = {
    type: `${actionTypeName}_FULFILLED`,
  };
  const rejected = {
    type: `${actionTypeName}_REJECTED`,
  };
  return { pending, fulfilled, rejected };
};

export const snapshotChildMap = snapshot => {
  const json = snapshot.toJSON();
  if (!json) {
    return [];
  }
  const keys = Object.keys(json);
  return keys.map(key => ({ key, ...json[key] }));
};

export const generateRandomId = (padding = 9) => {
  const idRange = Number(''.padStart('9', padding));
  const randomId = Math.floor(Math.random() * Math.floor(idRange));
  return randomId.toString().padStart('0');
};

export const fakeLatency = async (minWaitInMs = 200, maxWaitInMs = 500) => {
  const waitTime =
    Math.floor(Math.random() * Math.floor(maxWaitInMs)) + minWaitInMs;
  return new Promise(resolve => setTimeout(resolve, waitTime));
};
