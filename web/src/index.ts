// import { UserEdit } from './views/UserEdit'
// import { User } from './models/User'

import { Collection } from './models/Collection'
import { User, UserProps } from './models/User'
import { UserList } from './views/UserList'

// const user = User.buildUser({ name: 'NAMEME', age: 20 })

// const root = document.getElementById('root')
// if (root) {
//     const userEditor = new UserEdit(root, user)
//     userEditor.render()

//     console.log(userEditor)
// }

const users = new Collection(
    'http://localhost:3000/users',
    (json: UserProps) => {
        return User.buildUser(json)
    }
)

users.on('change', () => {
    const root = document.getElementById('root')
    if (root) {
        new UserList(root, users).render()
    }
})

users.fetch()
