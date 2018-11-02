import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      bloodTypes: null,
      easternZodiacs: null,
      westernZodiacs: null,
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/users')
      .then(res => this.setState({ users: res.data }));
    axios
      .get('http://localhost:3000/bloodTypes')
      .then(res => this.setState({ bloodTypes: res.data }));
    axios
      .get('http://localhost:3000/westernZodiacs')
      .then(res => this.setState({ westernZodiacs: res.data }));
    axios
      .get('http://localhost:3000/easternZodiacs')
      .then(res => this.setState({ easternZodiacs: res.data }));
  }

  render() {
    return <h1>Hello World</h1>;
  }
}

export default App;
