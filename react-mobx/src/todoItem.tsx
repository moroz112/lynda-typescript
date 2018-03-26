import * as React from 'react';
import { observer } from 'mobx-react';

interface TodoItemProps {
    text: String;
    deleteItem: Function;
    id: number;
    asyncChanges: Function;
}
@observer
export class TodoItem extends React.Component<TodoItemProps, {}> {

    render() {
        const { id, text, deleteItem, asyncChanges } = this.props;
        return (
            <li>
                {text}
                <button onClick={deleteItem.bind(id)}>Delete item</button>
                <button onClick={asyncChanges.bind(this)}>Change to ololo</button>
            </li>
        );
    }
}
