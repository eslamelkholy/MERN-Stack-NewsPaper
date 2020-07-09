const controller = require('./article.controller')
const express = require('express')
const router = express.Router()

router.get('', controller.getAllArticles)

module.exports = router