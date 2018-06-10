'use strict'

const GRAN = {
  s: 60,
  m: 60,
  h: 24,
  d: 7,
  w: 9e9
}


function ms9(duration) {
  if (!duration) return '0μ'
  if (duration < 1000) return duration + 'μ'
  duration = Math.floor(duration / 1000)
  let result = ''
  for (let i in GRAN) {
    if (duration < 100) return duration + i + result
    let gran = GRAN[i]
    let remainder = duration % gran
    duration = Math.floor(duration / gran)
    result = remainder + i + result
  }
  return '∞w'
}

module.exports = ms9