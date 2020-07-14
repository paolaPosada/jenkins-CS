const {sayHello} = require('../controller')

describe('Basic tests', () => {
  it('Should have message property', (done) => {
    const res = sayHello();
    expect(res).toHaveProperty('message');
    done();
  });

  it('Should retrieve a Hello world! as a message', (done) => {
    const res = sayHello();
    expect(res.message).toBe('Hello World!');
    done();
  });
});