import { User, UserProps } from '../models/User'
import { View } from './View'

export class UserShow extends View<User, UserProps> {
    override template(): string {
        return `
        <div>
            <h1>User Detail</h1>
            <div>name: ${this.model.get('name')}</div>
            <div>age: ${this.model.get('age')}</div>
        </div>
        `
    }
}
