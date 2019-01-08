import './index.scss';

import * as serviceWorker from './serviceWorker';

import App from './app';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
