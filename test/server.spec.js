const request = require('supertest');
const app = require('../app');

describe('Hello world server', () => {
  it('should respond', done => {
    request(app)
      .get('/')
      .expect(200)
      .end(err => {
        expect(err).toBeNull();
        done();
      });
  });
});
