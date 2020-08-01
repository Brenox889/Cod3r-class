//não aceita repetição/não indexada

const times = new Set()
times.add('Palmeiras').add('Corinthians').add('Palmeiras')

console.log(times.size)
console.log(times.has('Palmeiras'))
console.log(times.has('palmeiras'))