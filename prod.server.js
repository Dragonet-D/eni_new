let express = require('express')
let config = require('./config/index')
let port = process.env.PORT || config.build.port
let app = express()
app.use(express.static('./dist'))
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('listening at http://localhost:' + port + '\n')
})
