import * as tf from '@tensorflow/tfjs'


/* Implements basic conjugate gradient method.
 * Av is expected to be a function Av(v) should return the product of A and v
 * (this way it is not required to store A at any time).
 */
export default (_Av, b, tolerance=1e-05, max_iterations=5) => {
  let shape = b.shape
  b = b.reshape([-1])

  let Av = (v) => _Av(v).reshape([-1])

  let x = tf.zerosLike(b);

  // residual
  let r = b.sub(Av(x))


  // search direction
  let p = tf.clone(r)

  // used multiple times
  let r_dot_r, r_dot_r_new

  r_dot_r = r.dot(r)

  let Ap, alpha, beta

  for (let i = 0; i < max_iterations; i++) {
    Ap = Av(p)

    alpha = r_dot_r.div(p.dot(Ap))

    // update x and residual
    x = x.add(p.mul(alpha))

    r = r.sub(Ap.mul(alpha))

    r_dot_r_new = r.dot(r)

    // if tolerance is reached, terminate
    if (r_dot_r_new < tolerance) {
      break
    }

    // prepare for next iteration
    beta = r_dot_r_new.div(r_dot_r)

    // update search direction
    p = r.add(p.mul(beta))

    // shortcut for next iteration
    r_dot_r = r_dot_r_new

  }

  return x.reshape(shape)
}
