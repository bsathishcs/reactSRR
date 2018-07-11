const next = require('next')
const routes = require('./src/routes')
const app = next({dir: 'src', dev: true})
const handler = routes.getRequestHandler(app)

const {createServer} = require('http')

app.prepare().then(() => {
  createServer(handler).listen(8081)
})