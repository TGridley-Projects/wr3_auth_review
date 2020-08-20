import React from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import Auth from './Components/Auth/Auth';
import Welcome from './Components/Welcome/Welcome';
import { addUser } from './redux/reducers/authReducer';

class App extends React.Component {
  componentDidMount() {
    axios
      .get('/auth/session')
      .then(res => {
        if (res.data) {
          this.props.addUser(res.data)
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <main>
        <Auth />
        <Welcome />
      </main>
    );
  }
}

export default connect(null, { addUser })(App);