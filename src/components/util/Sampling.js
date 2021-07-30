
import * as tf from '@tensorflow/tfjs'

export const sampleIndependentMultivariateGaussian = (mean, variance) => {
    return tf.concat(mean.map((m, i) => tf.randomNormal([1], m, variance[i])))
}