import { makeAutoObservable } from 'mobx'

class Example {
    count = 9
    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        this.count = this.count + 1
    }

    decrement() {
        this.count = this.count - 1
    }
}

export default  new Example()