import { Router } from 'express'

var router = Router()

const initRouter = () => {
    router.route('/')
        .get(sayHello)

    return router
}

// --- Handlers ---
const sayHello = (req, res) => {
    res.send('Hello world')
}
// -----------------

export default initRouter()