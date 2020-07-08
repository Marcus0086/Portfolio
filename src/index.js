import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Blog from './components/blog';
import './index.css';


ReactDOM.render(
    <React.StrictMode>
        <Blog />
    </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
