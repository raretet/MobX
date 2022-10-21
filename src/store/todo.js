import { makeAutoObservable } from "mobx"

class Todo {
    timer = 60

    get total() {
        return `Count + timer = ` + this.timer + this.count
    }

    todos = [
        {
            id: 1,
            title: 'Sell pc',
            completed: false
        },
        {
            id: 2,
            title: 'Bag',
            completed: false
        },
        {
            id: 3,
            title: 'Litepaper page',
            completed: false
        },

    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todo.push(todo)
    }

    remoteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    }

    fetchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.todos = [...this.todos, ...json]
            })
    }
}

export default new Todo()