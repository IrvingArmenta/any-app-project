function randomBool(probability = 50) {
  if (probability < 10 || probability > 90) {
    throw new Error('probability can only be between 10 or 90');
  }
  return Math.random() < probability / 100;
}

export default randomBool;
