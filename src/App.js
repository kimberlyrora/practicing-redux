import React, { Component } from 'react';
import App2 from './components/App2'
import './App.css';
import UserSearchForm from './components/Users'
// import { rotateAction } from './actions/Action'

class App extends Component {
  render() {    

    return (
        // <App2 />
        <UserSearchForm />
    )
  }
}
// const mapStateToProps = state => ({
//   ...state
// });

// const mapDispatchToProps = dispatch => ({
//   rotateAction: (payload) => dispatch(rotateAction(payload))
// });
export default App;
