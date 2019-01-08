import './app.scss';

import React, { Component } from 'react';

import { LoginPage } from 'modules/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <LoginPage />
        </div>
      </div>
    );
  }
}

export default App;
