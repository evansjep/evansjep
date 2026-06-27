const test = require('node:test');
const assert = require('node:assert/strict');
const { validateContactPayload } = require('./contact');

test('accepts valid contact payloads', () => {
  const result = validateContactPayload({
    email: 'founder@example.com',
    message: 'A clear execution request.',
  });

  assert.equal(result.valid, true);
  assert.equal(result.error, undefined);
});

test('rejects invalid contact payloads', () => {
  const result = validateContactPayload({
    email: 'not-an-email',
    message: '',
  });

  assert.equal(result.valid, false);
  assert.match(result.error, /valid email/i);
});
