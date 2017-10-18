import * as React from 'react';
import {Container} from "inversify";
import {todoModule} from "./todo.module";
import {Provider} from "inversify-react";
import App from "./App";

class Root extends React.Component<{}, {}> {
    container: Container;

    componentWillMount() {
        this.container = new Container;
        this.container.load(
            todoModule
        )
    }
 render() {
    return (
        <Provider container={this.container}>
            <App/>
        </Provider>
    )
 }
}
export default Root;