import * as React from 'react';
import './App.css';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

export interface ITodo {
    id: number;
    text: string;
    completed: boolean;
}
export interface IStore {
    todos: ITodo[];
    filteredTodos: ITodo[];
    filter: string,
    deleteItem: any,
    addItem: any
}
export interface IAppProps {
    store: IStore
}
@observer
class App extends React.Component<IAppProps, {}> {
    filter(e:any) {
        this.props.store.filter = e.target.value;
    }
    addTodo(e:any) {
        if(e.which === 13) {
            this.props.store.addItem(e.target.value)
        }
    }
    delete(id:number) {
        this.props.store.deleteItem(id)
    }
  render() {
    const { filter, filteredTodos } = this.props.store;
    return (
      <div className="App">
          <div>Filter</div>
          <input value={ filter } onChange={this.filter.bind(this)}/>
          <div>Add new</div>
          <input onKeyPress={this.addTodo.bind(this)}/>
          <ul>
              {filteredTodos.map((todo, index) =>
                  <li key={index}>
                      {todo.text}
                      <button onClick={this.delete.bind(this, todo.id)}>Delete Item</button>
                  </li>

              )}
          </ul>
          <DevTools/>
      </div>
    );
  }
}

export default App;
