import debounce from 'lodash/debounce'

let render_counter = 0

export const renderTex = debounce(() => {
  render_counter += 1
  console.log('latex rerender', render_counter)
  MathJax.typesetPromise()
}, 200)
