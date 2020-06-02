export const generateRandomId = (padding = 9) => {
  const idRange = Number("".padStart("9", padding));
  const randomId = Math.floor(Math.random() * Math.floor(idRange));
  return randomId.toString().padStart("0");
};

export const fakeLatency = async (minWaitInMs = 200, maxWaitInMs = 500) => {
  const waitTime =
    Math.floor(Math.random() * Math.floor(maxWaitInMs)) + minWaitInMs;
  return new Promise(resolve => setTimeout(resolve, waitTime));
};
