function generateRandomId() {
  return `id-${Math.random().toString(36).substring(2, 11)}-${Date.now()}`;
}

export {
  // eslint-disable-next-line import/prefer-default-export
  generateRandomId,
};
