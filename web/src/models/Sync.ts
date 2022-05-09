import axios, { AxiosPromise, AxiosResponse } from 'axios'
import { HasId, Sync } from './Model'

export class ApiSync<T extends HasId> implements Sync<T> {
    constructor(private rootUrl: string) {}

    fetch = (id: number): AxiosPromise<T> => {
        return axios.get(`${this.rootUrl}${id}`)
    }

    save = (data: T): AxiosPromise<T> => {
        const { id } = data
        if (id) {
            //put
            return axios.put(`${this.rootUrl}${id}`, data)
        } else {
            //post
            return axios.post(`${this.rootUrl}`, data)
        }
    }
}
