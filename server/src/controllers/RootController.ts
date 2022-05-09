import { Response, Request, NextFunction } from 'express'
import { get, controller, use } from './decorators'

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
    if (req.session && req.session.loggedIn) {
        next()
    } else {
        res.status(403)
        res.send('Not permitted.')
    }
}

@controller('')
class RootController {
    @get('/')
    getRoot(req: Request, res: Response) {
        // req.session
        if (req.session && req.session.loggedIn) {
            res.send(`
        <div>
            <div>You're logged in.</div>
            <a href="/auth/logout">Logout</a>
        </div>
        `)
        } else {
            res.send(`
        <div>
            <div>You are not logged in.</div>
            <a href="/auth/login">Login</a>
        </div>  
        `)
        }
    }

    @get('/protected')
    @use(requireAuth)
    getProtected(req: Request, res: Response) {
        res.send('Welcome to protected route, logged in user. ')
    }
}
