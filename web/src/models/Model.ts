import { AxiosPromise, AxiosResponse } from 'axios'

export type Callback = () => void

export interface HasId {
    id?: number
}

export interface ModelAttributes<T> {
    get<K extends keyof T>(key: K): T[K]
    set(update: T): void
    getAll(): T
}

export interface Sync<T> {
    fetch(id: number): AxiosPromise<T>
    save(data: T): AxiosPromise<T>
}

export interface Events {
    on(eventName: string, callback: Callback): void
    trigger(eventName: string): void
}

export class Model<T extends HasId> {
    constructor(
        private attributes: ModelAttributes<T>,
        private events: Events,
        private sync: Sync<T>
    ) {}

    get = this.attributes.get

    set = (update: T): void => {
        this.attributes.set(update)
        this.trigger('change')
    }

    on = this.events.on

    trigger = this.events.trigger

    fetch = (): void => {
        const id = this.get('id')

        if (typeof id !== 'number') {
            throw new Error('Cannot fetch without id')
        }

        this.sync.fetch(id).then((response: AxiosResponse): void => {
            this.set(response.data)
        })
    }

    save = (): void => {
        this.sync
            .save(this.attributes.getAll())
            .then((resposne: AxiosResponse): void => {
                this.trigger('save')
            })
            .catch((): void => {
                this.trigger('error')
            })
    }
}
