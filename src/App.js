import React, { Component } from 'react'
import SignupForm from './components/SignupForm/SignupForm'
import Header from './components/Header/Header'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/">
          <Header />
        </Route>
        <Route path="/signup" exact>
          <SignupForm />
        </Route>
      </Router>
    )
  }
}

export default App