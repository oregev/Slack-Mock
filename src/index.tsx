// Core
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import { store } from './Store/store';
// Components
import { App } from './App';
// Style
import './Styles/index.css';
// Workers
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
