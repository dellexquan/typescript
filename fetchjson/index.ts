import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    id: number
    title: string
    completed: boolean
}

axios.get(url).then((res) => {
    console.log(res.data)

    const todo = res.data as Todo

    // const ID = todo.id
    // const title = todo.title
    // const finished = todo.completed

    logTodo(todo)
})

const logTodo = (todo: Todo) => {
    console.log(`
        The Todo with ID: ${todo.id}
        Has a title of: ${todo.title}
        Is it finished? ${todo.completed}
    `)
}
