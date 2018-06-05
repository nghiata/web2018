import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CardList from './CardList';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Hello greeting={'nghiatc'} />, document.getElementById('root'));
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
