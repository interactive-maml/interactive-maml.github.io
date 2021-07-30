import {writable} from 'svelte/store'

let value = localStorage.getItem('teaserStats')
if (value) {
  try {
    value = JSON.parse(value)
  } catch (e) {
    value = null
  }

} else {
  value = null
}

export const teaserStats = writable(value)

teaserStats.subscribe((value) => {
  localStorage.setItem('teaserStats', JSON.stringify(value))
})
