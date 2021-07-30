
// get length of vector
export const length = (v) => Math.sqrt(v[0]*v[0] + v[1]*v[1])

// add to vectors together
export const add = (a, b) => [a[0]+b[0], a[1]+b[1]]

// subtract to vectors
export const sub = (a, b) => [a[0]-b[0], a[1]-b[1]]

// multiply vector with scalar
export const mul = (v, s) => [v[0]*s, v[1]*s]

// divide vector by scalar
export const div = (v, s) => [v[0]/s, v[1]/s]

export const normalized = (v) => div(v, length(v))
