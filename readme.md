# Gradient Descent

Module to iterate over a numerically function to Gradient Descent direction

# API
The module expose a function with next params

#### GD(initialPoint,asyncNumericalFunc,stepSize,deltaSize,numSteps,precision,tolerance,adaptive)->Promise(bestParams)

Iterate NUM_STEPS and stop when the norm of gradient is less that PRECISION, 
every step is of size STEP_SIZE and the numerical derivate is aproximated by:

    derivate = [f(x + DELTA_SIZE) - f(x)]/DELTA_SIZE

If the error falls below TOLERANCE (if present), the algorithm is terminated.  This increased speed significantly, in tests.

If ADAPTIVE (I recommend a value of 1), STEP_SIZE and DELTA_SIZE decrease hyperbolically with increasing iteration count, as e.g. (ADAPTIVE*DELTA_SIZE/(j+ADAPTIVE)) .  This increased accuracy significantly, in tests.

# Usage 

```js
const optimze = require('gradient-descent')
const func = async (x, y, z) => x * x + y * y + z * z;
const init = [3, 4, 5]; // dimension is obtained from initial point
const res = await optimize(init, func);
assert(await func(...res) < await func(...init));
```