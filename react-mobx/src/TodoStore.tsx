import {action, autorun, computed, observable} from 'mobx';
import { injectable } from 'inversify';
import Todo from './Todo';

@injectable()
class TodoStore {
    @observable todos: Array<Todo> = [];
    @observable filter: string = '';

    @computed get filteredTodos() {
        var matchedFilter = new RegExp(this.filter, 'i');
        return this.todos.filter(todo => !this.filter || matchedFilter.test(todo.text))
    }
    @action('delete Todo item')
    deleteItem(id: number) {
        let itemForDelete = this.todos.filter((todo: Todo) => {
           return todo.id == id
        });
        this.todos.splice(this.todos.indexOf(itemForDelete[0]), 1);
    }
    @action('add todo item')
    addItem(value: string) {
        this.todos.push(new Todo(value));
    }

}

var store = new TodoStore;

export default store;

autorun(() => {
    console.log(store.filter);
    console.log(store.todos[0]);
});