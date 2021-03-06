import { Response, Request, NextFunction } from 'express'
import { get, controller, use, post, bodyValidator } from './decorators'

@controller('/auth')
class LoginController {
    @get('/login')
    getLogin(req: Request, res: Response) {
        res.send(`
            <form method='POST'>
                <div>
                    <label>Email</label>
                    <input name='email' />
                </div>
                <div>
                    <label>Password</label>
                    <input name='password' type='password' />
                </div>
                <button>Submit</button>
            </form>
        `)
    }

    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: Request, res: Response) {
        const { email, password } = req.body
        if (
            email &&
            password &&
            email === 'dellex.quan@aon.com' &&
            password === '123qwe'
        ) {
            // mark as logged in
            req.session = { loggedIn: true }
            // redirect to the root
            res.redirect('/')
        } else {
            res.send('Invalid email or password.')
        }
    }

    @get('/logout')
    getLogout(req: Request, res: Response) {
        req.session = undefined
        res.redirect('/')
    }
}
