const controller = require('./article.controller')
const express = express()
const router = express.router()

router.get('', controller.getAllArticles)

module.exports = router