/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
const get_numerical_derivate = (y_n, y_n_1, x_n, x_n_1) => (y_n - y_n_1) / (x_n - x_n_1);
const dot_product = (vect_1, vect_2) => vect_1
  .reduce(
    (total, val, index) => total + val * vect_2[index],
    0,
  );
const scalar_product = (vect = [], scalar = 1) => vect.map(val => val * scalar);
const norm_of_vector = vect => Math.sqrt(dot_product(vect, vect));
const add_lists = (list1, list2) => list1.reduce(
  (added, val, index) => added.concat([val + list2[index]]),
  [],
);
module.exports = async (
  point_0,
  get_error,
  STEP_SIZE = 0.3,
  DELTA_SIZE = STEP_SIZE.DELTA_SIZE || 1,
  NUM_STEPS = STEP_SIZE.NUM_STEPS || 15,
  PRECISION = STEP_SIZE.PRECISION || STEP_SIZE || 1,
) => {
  STEP_SIZE = STEP_SIZE.STEP_SIZE || STEP_SIZE;
  let x_n_minus_1 = Object.assign([], point_0);
  const space_dim = x_n_minus_1.length;
  let Error_n_minus_1 = await get_error(...x_n_minus_1);
  let x_n = Object.assign([], x_n_minus_1);
  for (let j = 0; j < NUM_STEPS; j++) {
    const derivate = [];
    for (let index = 0; index < space_dim; index++) {
      step = (Math.random() || 1) * DELTA_SIZE
      x_n[index] += step;
      const Error_n = await get_error(...x_n);
      const numerical_derivate = get_numerical_derivate(
        Error_n,
        Error_n_minus_1,
        x_n[index],
        x_n_minus_1[index],
      );
      derivate.push(numerical_derivate);
      x_n[index] -= step;
    }

    const normOfDerivate = norm_of_vector(derivate);

    if (normOfDerivate < PRECISION) break;

    const stepInDerivateDirection = scalar_product(derivate, -1 * STEP_SIZE);

    x_n_minus_1 = add_lists(x_n, stepInDerivateDirection);
    Error_n_minus_1 = await get_error(...x_n_minus_1);
    x_n = Object.assign([], x_n_minus_1);
  }
  return x_n;
};
