import React, { Component } from 'react'
import SignupForm from './components/SignupForm/SignupForm'
import MainPage from './components/MainPage/MainPage'
import HomePage from './components/HomePage/HomePage'
import AddAnExpense from './components/MainPage/AddAnExpense'
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
          <HomePage />
        </Route>
        <Route path="/mainpage" exact>
          <MainPage />
        </Route>
        <Route path="/signup" exact>
          <SignupForm />
        </Route>
        <Route path="/addexpense" exact>
          <AddAnExpense />
        </Route>
      </Router>
    )
  }
}

export default App