module.exports = (app) => {
  app.use('/api/user', require('./user/user.routes'))
  app.use('/api/article', require('./article/article.routes'))
}