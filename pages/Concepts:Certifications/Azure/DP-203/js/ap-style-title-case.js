// https://github.com/words/ap-style-title-case

function titleCase(str, options) {
  const stopwords = 'a an and at but by for in nor of on or so the to up yet with about around is are was be possible vs. from et al.'
  const defaults = stopwords.split(' ')
  
  const opts = options || {}

  if (!str) return ''

  const stop = opts.stopwords || defaults
  const keep = opts.keepSpaces
  // const splitter = /(\s+|[-‑–—])/
  const splitter = /(\s+)/

  return str
    .split(splitter)
    .map((word, index, all) => {
      if (word.match(/\s+/)) return keep ? word : ' '
      if (word.match(splitter)) return word

      if (
        index !== 0 &&
        stop.includes(word.toLowerCase())
      ) {
        return word.toLowerCase()
      }

      return capitalize(word)
    })
    .join('')
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}