import './login-page.scss';

import React, { Component } from 'react';

import { LoginService } from 'modules/login';

class LoginPage extends Component {
  state = {
    apiKey: '',
    clientId: '',
    isLoading: false,
    error: null
  };

  handleCredentialsChange = ({ target }) => {
    this.setState({
      ...this.state,
      [target.name]: target.value
    });
  }

  setLoading(loading) {
    this.setState({
      ...this.state,
      isLoading: loading
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { clientId, apiKey } = this.state;
    // this.setLoading(true);
    
    LoginService.login(clientId, apiKey);

  }

  render() {
    const { apiKey, clientId, error, isLoading } = this.state;

    return (
      <div className="LoginPage">
        <div className="LoginPage__content">
          <h3 className="LoginPage__title">
            Bem vindo a demo liveecommerce
          </h3>
          <p className="LoginPage__description">
            Digite abaixo seu Client Id e sua Api Key para acessar a demo
          </p>
          <form className="LoginPage__form" onSubmit={this.handleSubmit}>
            <div className="LoginPage__form-control">
              <label className="LoginPage__form-label"> Client Id </label>
              <input
                required
                min="1"
                max="10"
                name="clientId"
                placeholder="Client Id"
                className="LoginPage__form-input"
                value={clientId}
                onChange={this.handleCredentialsChange}
              />
            </div>
            <div className="LoginPage__form-control">
              <label className="LoginPage__form-label"> Api Key </label>
              <input
                required
                min="1"
                max="100"
                name="apiKey"
                placeholder="Api Key"
                className="LoginPage__form-input"
                value={apiKey}
                onChange={this.handleCredentialsChange}
              />
            </div>
            <button className="LoginPage__form-submit" disabled={isLoading} type="submit">
              Acessar demonstração
            </button>
            <p className="LoginPage__obs">
              Para obter seu Client Id e sua Api Key acesse o seu 
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="LoginPage__link"
                href="http://painel.liveecommerce.com.br">
                painel
              </a>
            </p>
            { error && (
              <div className="LoginPage__error">
                Oops, {error}
              </div>
              )
            }
          </form>
        </div>
      </div>
    )
  }
}

export default LoginPage;