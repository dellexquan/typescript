import 'reflect-metadata'

@controller
class Plane {
    color: string = 'red'

    @get('/login')
    fly(): void {
        console.log('rrrrr')
    }
}

function get(path: string) {
    return function (target: Plane, key: string) {
        Reflect.defineMetadata('path', path, target, key)
    }
}

function controller(target: typeof Plane) {
    const keys = Object.getOwnPropertyNames(target.prototype)
    for (let key of keys) {
        const path = Reflect.getMetadata('path', target.prototype, key)
        const middlerware = Reflect.getMetadata(
            'middleware',
            target.prototype,
            key
        )

        if (path) {
            // router.get(path, middlerware, target.prototype[key])
            // const method = target.prototype[key]
            const desc = Object.getOwnPropertyDescriptor(target.prototype, key)
            desc?.value()
        }
    }
}
