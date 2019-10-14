import React, { Component } from 'react';
import logo from './logo.svg';
import './customBootstrap.scss';

import Button from 'react-bootstrap/Button';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "No API response." };
  }

  callAPI() {

    fetch("http://localhost:9000/testAPI")
        // Check that the response is text
        .then(res => res.text())
        // Set the state updating apiResponse.
        .then(res => this.setState({ apiResponse: res, }))
        .catch(err => err);
  }

  // Lifecycle method when mounting the compontent? Probably.
  componentDidMount() {
    this.callAPI();
    //this.setState({ apiResponse: "res"});
  }

  componentWillMount() {
    this.callAPI();
  }

  // Render method
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">{this.state.apiResponse}</p>
          <Button
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Button>
        </header>
      </div>
    );
  }
}
export default App;
