import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {username:'default-username', password:'default-password'}
  }

  componentDidMount() {
    this.nv.addEventListener("login", this.handleNvEnter);
  }

  componentWillUnmount() {
    // Make sure to remove the DOM listener when the component is unmounted.
    this.nv.removeEventListener("login", this.handleNvEnter);
  }

  // Use a class arrow function (ES7) for the handler. In ES6 you could bind()
  // a handler in the constructor.
  handleNvEnter = (event) => {
    this.setState({ username: event.detail.username, password: event.detail.password })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <ng-login ref={elem => this.nv = elem} username={this.state.username} password={this.state.password}></ng-login>

          <div>
            User Name: {this.state.username}
          </div>
          <div>
            password: {this.state.password}
          </div>
      </div>
        );
      }
    }
    
    export default App;
