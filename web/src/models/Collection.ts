import axios, { AxiosResponse } from 'axios'
import { Eventing } from './Eventing'
import { Model } from './Model'

export class Collection<T extends Model<K>, K> {
    constructor(
        public rootUrl: string,
        public deserialize: (json: K) => T,
        public models: T[] = [],
        private events: Eventing = new Eventing()
    ) {}

    on = this.events.on
    trigger = this.events.trigger

    fetch = (): void => {
        axios.get(this.rootUrl).then((response: AxiosResponse<K[]>) => {
            response.data.forEach((value: K): void => {
                this.models.push(this.deserialize(value))
            })

            this.events.trigger('change')
        })
    }
}
