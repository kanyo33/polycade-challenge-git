const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') return respondHello(req, res)
<<<<<<< HEAD
  if (req.url.match(/^\/b64\//)) return respondBase64(req, res)

=======
>>>>>>> 8f29a10fdbcef5836d13082de027b09b593a024b
  if (req.url === '/user-agent') return respondUserAgent(req, res)

  res.end()
})

function respondHello (req, res) {
  res.end(JSON.stringify({ msg: 'hello' }))
}

<<<<<<< HEAD
function respondBase64 (req, res) {
  const phrase = req.url.replace(/^\/b64\//, '')
  res.end(JSON.stringify({ b64: Buffer.from(phrase).toString('base64') }))
}

=======
>>>>>>> 8f29a10fdbcef5836d13082de027b09b593a024b
function respondUserAgent (req, res) {
  const ua = req.headers['user-agent']
  res.end(JSON.stringify({ ua }))
}

server.listen(PORT)
console.log(`Server listening on port ${PORT}`)

if (require.main !== module) module.exports = server
