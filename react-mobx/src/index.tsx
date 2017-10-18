import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './TodoStore';
import './index.css';

ReactDOM.render(
  <App store ={store} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
