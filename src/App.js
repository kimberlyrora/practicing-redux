import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import { rotateAction } from './actions/rotateAction'

class App extends Component {
  render() {
    console.log(this.props);

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={"App-logo" 
        + (this.props.rotating ? "": "App-logo-paused")} alt="logo" 
         />
        <p onClick={() => {this.props.rotateAction(!this.props.rotating)}}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
}
}
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  rotateAction: (payload) => dispatch(rotateAction(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
