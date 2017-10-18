import { observable } from 'mobx';

class Todo {
    @observable text:string;
    @observable id:number;
    @observable completed: boolean;

    constructor(value: string) {
        this.text = value;
        this.id = Date.now();
        this.completed = false
    }
}

export default Todo;