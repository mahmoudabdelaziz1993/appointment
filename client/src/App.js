import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import SentRequest from "./components/SentRequests";
import ComingRequest from "./components/ComingRequest";
import CreateAppoint from "./components/CreateAppoint"
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav/>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Dashboard} />
          <Route exact path="/sent-requests" component={SentRequest} />
          <Route exact path="/coming-requests" component={ComingRequest} />
          <Route exact path="/appointments" component={CreateAppoint} />

        </div>
      </BrowserRouter>

    );
  }
}

export default connect(null, actions)(App);;
