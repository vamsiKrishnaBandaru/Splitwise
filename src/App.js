import React, { Component } from 'react'
import SignupForm from './components/SignupForm/SignupForm'
import MainPage from './components/MainPage/MainPage'
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
          <MainPage />
        </Route>
        <Route path="/signup" exact>
          <SignupForm />
        </Route>
      </Router>
    )
  }
}

export default App