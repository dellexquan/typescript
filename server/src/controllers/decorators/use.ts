import { RequestHandler } from 'express'
import 'reflect-metadata'
import { MetadataKeys } from './metadataKeys'
import { RouteHandlerDescriptor } from './routes'

export function use(middleware: RequestHandler) {
    return function (target: any, key: string, desc: RouteHandlerDescriptor) {
        const middlewares =
            Reflect.getMetadata(MetadataKeys.middleware, target, key) || []

        Reflect.defineMetadata(
            MetadataKeys.middleware,
            [...middlewares, middleware],
            target,
            key
        )
    }
}
