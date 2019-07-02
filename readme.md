# Gradient Descent

Module to iterate over a numerically function to Gradient Descent direction

# API
The module expose a function with next params

## GradientDescent(initialPoint, asyncNumericalFunc, STEP_SIZE, DELTA_SIZE, NUM_STEPS,PRESICION) -> Promise(bestParams)

Iterate NUM_STEPS and stop when the norm of gradient is less that PRESICION, 
every step is of size STEP_SIZE and the numerical derivate is aproximated by:
    derivate = [f(x + DELTA_SIZE) - f(x)]/DELTA_SIZE
# Usage 

```js
const func = async (x, y, z) => x * x + y * y + z * z;
const init = [3, 4, 5]; // dimension is obtained from initial point
const res = await optimize(init, func);
assert(await func(...res) < await func(...init));
```