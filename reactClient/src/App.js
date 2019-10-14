import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './customBootstrap.scss';

import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Button';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

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
          <ExampleToast className="toast">
            We now have Toasts
            <span role="img" aria-label="tada">
              🎉
            </span>
          </ExampleToast>
        </header>
      </div>
    );
  }
}
export default App;
