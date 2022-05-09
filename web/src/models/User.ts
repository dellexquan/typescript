import { Attributes } from './Attributes'
import { Collection } from './Collection'
import { Eventing } from './Eventing'
import { Model, HasId } from './Model'
import { ApiSync } from './Sync'

export interface UserProps extends HasId {
    // id?: number
    name?: string
    age?: number
}

const rootUrl = 'http://localhost:3000/users/'

export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync(rootUrl)
        )
    }

    static buildUserCollection(): Collection<User, UserProps> {
        return new Collection<User, UserProps>(rootUrl, User.buildUser)
    }

    setRandomAge(): void {
        const age = Math.round(Math.random() * 100)
        this.set({ age: age })
    }
}
