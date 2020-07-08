const express = require('express')
const db = require('./models')
const app = express()
const port = 8000

require('./middlewares/expressMiddleware')(app)

require('./components')(app)

db.sequelize.sync({
  // force: true
}).then(() => {
  app.listen(port, () => {
    console.log('running server on port ' + port);
  })
});