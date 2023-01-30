import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ifFilled: false,
    }
  }
  handelChange = () => {

  }
  render() {
    return (
      <>
        {
          this.state.ifFilled
            ?
            <h3 className="toppad">reCAPTCHA verification failed, please try again.</h3>
            :
            <div className="toppad"></div>
        }

        <div className='container'>
          <div className="d-flex justify-content-center gap-5">
            <div className="col-md-2 signup-left-logo">
              <img src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" className="img-fluid" alt="Sample image" />
            </div>
            <div className="form-container">
              <h6>INTRODUCE YOURSELF</h6>
              {
                <div className="error_messages">
                  <span className="error">The following errors occurred:</span>
                  <div id="errorExplanation">
                    <ul>
                      <li>Please enter a valid email address.</li>
                    </ul>
                  </div>
                </div>
              }
              <form>
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="name">Hi there! My name is
                  </label>
                  <input type="text" id="name" className="form-control form-control-lg name-input"
                    onChange={this.handelChange} />
                </div>
                <div className="form-group mb-3 bottom-inputs">
                  <label className="form-label" htmlFor="email">
                    Here’s my <strong>email address</strong>:
                  </label>
                  <input type="email" id="email" className="form-control name-input"
                    onChange={this.handelChange} />
                </div>
                <div className="form-group mb-3 bottom-inputs">
                  <label className="form-label" htmlFor="password">
                    And here’s my <strong>password</strong>:
                  </label>
                  <input type="password" id="password" className="form-control name-input"
                    onChange={this.handelChange} />
                </div>
                <div className='bottom-btns'>
                  <div className='signup-btn'>
                    <button type="button" className="btn">Sign me up!</button>
                  </div>
                  <div className='right-btn'>or
                    <a class="btn btn-large btn-signup btn-google" href="/auth/google_oauth2">
                      <img src="https://assets.splitwise.com/assets/fat_rabbit/signup/google-2017-a5b76a1c1eebd99689b571954b1ed40e13338b8a08d6649ffc5ca2ea1bfcb953.png" />
                      Sign up with Google
                    </a>
                  </div>
                </div>
                <div class="tos_acceptance">
                  <div>
                    <a href="/terms">By signing up, you accept the Splitwise Terms of Service.</a>
                  </div>
                  <div>
                    Don't use USD for currency? <a href=''>Click here</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </>
    )
  }
}

export default App