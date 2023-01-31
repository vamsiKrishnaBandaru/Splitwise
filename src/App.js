import React, { Component } from 'react'
import SignupForm from './components/SignupForm'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact>
          <SignupForm />
        </Route>
      </Router>
    )
  }
}

export default App