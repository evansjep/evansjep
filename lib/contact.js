function validateContactPayload(payload) {
  const email = typeof payload?.email === 'string' ? payload.email.trim() : '';
  const message = typeof payload?.message === 'string' ? payload.message.trim() : '';
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailPattern.test(email)) {
    return {
      valid: false,
      error: 'Please provide a valid email address.',
    };
  }

  if (message.length < 10) {
    return {
      valid: false,
      error: 'Please include a brief message with at least 10 characters.',
    };
  }

  return { valid: true };
}

module.exports = {
  validateContactPayload,
};
