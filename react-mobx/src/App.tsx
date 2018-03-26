import * as React from 'react';
import './App.css';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { resolve } from "inversify-react";
import { TodoStore } from "./TodoStore";
import { TodoItem } from './todoItem';


export interface ITodo {
    id: number;
    text: string;
    completed: boolean;
}
export interface IStore {
    todos: ITodo[];
    filteredTodos: ITodo[];
    filter: string;
    deleteItem: any;
    addItem: any;
}
export interface IAppProps {
    store: IStore;
}
@observer
class App extends React.Component<{}, {}> {
    @resolve
    private todoStore: TodoStore;

    filter(e:any) {
        this.todoStore.filter = e.target.value;
    }
    addTodo(e:any) {
        if(e.which === 13) {
            this.todoStore.addItem(e.target.value)
        }
    }
    asyncChanges() {
        this.todoStore.asyncChanges();
    }
    deleteItem(id: number) {
        this.todoStore.deleteItem(id);
    }
  render() {
    const { filter, filteredTodos} = this.todoStore;
    return (
      <div className="App">
          <div>Filter</div>
          <input value={ filter } onChange={this.filter.bind(this)}/>
          <div>Add new</div>
          <input onKeyPress={this.addTodo.bind(this)}/>
          <ul>
              {filteredTodos.map((todo, index) =>
                  <TodoItem key={index}
                            id={todo.id}
                            text={todo.text}
                            asyncChanges={this.asyncChanges.bind(this)}
                            deleteItem={this.deleteItem.bind(this)}
                  />

              )}
          </ul>
          <DevTools/>
      </div>
    );
  }
}

export default App;
