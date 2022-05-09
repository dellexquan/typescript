import {
    NextFunction,
    Router,
    Request,
    Response,
    RequestHandler
} from 'express'
import 'reflect-metadata'
import { AppRouter } from '../../AppRouter'
import { Methods } from './methods'
import { MetadataKeys } from './metadataKeys'

export const router: Router = AppRouter.getInstance()

function bodyValidator(keys: string[]): RequestHandler {
    return function (req: Request, res: Response, next: NextFunction) {
        if (!req.body) {
            res.status(422).send('Invalid request.')
            return
        }
        for (let key of keys) {
            if (!req.body[key]) {
                res.status(422).send('Invalid request.')
                return
            }
        }
        next()
    }
}

export function controller(routePrefix: string) {
    return function (target: Function) {
        console.log(target)
        const keys = Object.getOwnPropertyNames(target.prototype)
        for (let key of keys) {
            const routeHandler = Object.getOwnPropertyDescriptor(
                target.prototype,
                key
            )?.value
            const path = Reflect.getMetadata(
                MetadataKeys.path,
                target.prototype,
                key
            )
            const method: Methods = Reflect.getMetadata(
                MetadataKeys.method,
                target.prototype,
                key
            )

            const middlewares =
                Reflect.getMetadata(
                    MetadataKeys.middleware,
                    target.prototype,
                    key
                ) || []

            const requiredBodyProps =
                Reflect.getMetadata(
                    MetadataKeys.validator,
                    target.prototype,
                    key
                ) || []

            const validator = bodyValidator(requiredBodyProps)

            if (path) {
                router[method](
                    `${routePrefix}${path}`,
                    ...middlewares,
                    validator,
                    routeHandler
                )
            }
        }
    }
}
