function generateUrl(array) {
  let randomUrl = ''
  for (let i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * array.length)
    randomUrl = randomUrl + array[index]
  }
  return randomUrl
}

module.exports = generateUrl
