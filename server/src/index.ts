import express from 'express'
import { AppRouter } from './AppRouter'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import './controllers'

class Server {
    app: express.Express = express()

    constructor() {
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(cookieSession({ keys: ['laskdjf'] }))
        this.app.use(AppRouter.getInstance())
    }

    start(): void {
        this.app.listen(3000, () => {
            console.log('Listening on port 3000')
        })
    }
}

new Server().start()
