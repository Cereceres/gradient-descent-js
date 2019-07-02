const assert = require('assert');
const optimize = require('./index');

describe('test to optimize', () => {
  it('should get close to zero', async () => {
    const func = async (x, y, z) => x * x + y * y + z * z;
    const init = [3, 4, 5];
    const res = await optimize(init, func);
    assert(await func(...res) < await func(...init));
  });
});
