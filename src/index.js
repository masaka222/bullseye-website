import React from 'react';
import ReactDOM from 'react-dom';
import './icofont.css';
import './styles.css';
import { unregister } from './registerServiceWorker';
import App from './components/App/App';

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
