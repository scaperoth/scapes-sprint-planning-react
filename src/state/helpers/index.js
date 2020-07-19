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
