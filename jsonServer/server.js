const jsonServer = require('json-server')
const path = require('path')
const fs = require('fs')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.defaults({}))
server.use(jsonServer.bodyParser)
server.use(async (req, res, next) => {
    // eslint-disable-next-line promise/param-names
    await new Promise((res) => {
        setTimeout(res, 800)
    })
    next()
})

server.post('/login', (req, res) => {
    try {
        const { password, username } = req.body
        const { users } = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
        const userBD = users.find((user) => user.password === password && user.username === username)

        if (userBD) {
            res.json({ username: userBD.username, id: userBD.id })
        } else {
            res.status(403).json('Ошибка авторазации')
        }
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
})
server.use((req, res, next) => {
    try {
        if (req.headers.authorization.split(' ')[1] === '123') { // add your authorization logic here
            next() // continue to JSON Server router
        } else {
            res.status(401)
            res.json({ error: 'не авторизован' })
        }
    } catch (e) {
        res.status(500)
        res.json({ error: e })
    }
})

server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})
