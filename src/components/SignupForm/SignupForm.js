import React, { Component } from 'react'
import './SignupForm.css'
import validator from 'validator'
import { Link } from 'react-router-dom'
import { SIGN_IN_USER_DATA } from '../../redux/actions/DataType'
import { connect } from 'react-redux';
import SuccessLoginMessage from './SuccessMessage'

class SignupForm extends Component {
   constructor(props) {
      super(props)
      this.state = {
         ifFilled: false,
         isErrors: false,
         errors: {},
         isActive: false,
         formSubmited: false,
         name: '',
         email: '',
         password: '',
         isSignIn: false
      }
   }

   handleSubmit = (event) => {
      event.preventDefault();
      if (this.state.isActive) {
         const {
            name,
            email,
            password,
         } = this.state

         let errors = {}

         if (name === "") {
            errors.name = "First name can't be blank"
         }
         if (!validator.isEmail(email)) {
            errors.email = 'Please enter a valid email address.'
         }
         if (password.length < 8) {
            errors.password = 'Password is too short (minimum is 8 characters)'
         }
         if (!validator.isStrongPassword(password)) {
            errors.password1 = `Password is too common (e.g. '12345','password',etc) - please choose something more complex or unique`
         }
         if (Object.keys(errors).length === 0) {
            this.setState(
               {
                  ifFilled: true,
                  signUpStatus: true,
                  isErrors: false,
               }, () => {
                  this.props.AddFormData({
                     name: this.state.name,
                     email: this.state.email,
                     isSignIn: true,
                  });
               }
            );
            return;
         } else {
            this.setState(
               {
                  errors,
                  isErrors: true,
               }
            );
            return;
         }
      } else {
         this.setState({
            ifFilled: true
         })
      }
   }

   render() {
      const {
         name,
         password,
         email,
         isActive,
         isErrors,
         ifFilled,
         errors,
         signUpStatus
      } = this.state;
      return (
         <>
            {
               this.props.user.isSignIn
                  ?
                  <SuccessLoginMessage />
                  :
                  <>
                     {
                        (ifFilled && !signUpStatus)
                           ?
                           <div className="toppad">
                              <h6 className='alert-message'>
                                 Verification failed, please try again.
                                 <button className="close" onClick={() => {
                                    this.setState({
                                       ifFilled: false
                                    })
                                 }}>&times;</button>
                              </h6>
                           </div>
                           :
                           <div className="toppad"></div>
                     }

                     <div className='container'>
                        <div className="d-flex justify-content-center gap-md-5">
                           <div className="col-md-2 signup-left-logo">
                              <img src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" className="img-fluid" alt="Sample image" />
                           </div>
                           <div className="form-container">
                              <h6>INTRODUCE YOURSELF</h6>

                              {
                                 isErrors &&
                                 <div className="error_messages">
                                    <span className="error">The following errors occurred:</span>
                                    <div id="errorExplanation">
                                       <ul>
                                          {
                                             errors.name &&
                                             <li>{errors.name}</li>
                                          }

                                          {
                                             errors.password &&
                                             <li>{errors.password}</li>
                                          }

                                          {
                                             errors.password1 &&
                                             <li>{errors.password1}</li>
                                          }

                                          {
                                             errors.email &&
                                             <li>{errors.email}</li>
                                          }
                                       </ul>
                                    </div>
                                 </div>
                              }

                              <form onSubmit={this.handleSubmit} >
                                 <div className="form-outline mb-3">
                                    <label className="form-label" htmlFor="name">Hi there! My name is
                                    </label>
                                    <input type="text" id="name" className="form-control form-control-lg name-input"
                                       value={name}
                                       onChange={
                                          (event) => {
                                             this.setState({
                                                name: event.target.value,
                                                isActive: true
                                             });
                                          }
                                       }
                                    />
                                 </div>
                                 {
                                    isActive &&
                                    <>
                                       <div className="form-group mb-3 bottom-inputs">
                                          <label className="form-label" htmlFor="email">
                                             Here’s my <strong>email address</strong>:
                                          </label>
                                          <input type="text" id="email" className="form-control name-input"
                                             value={email}
                                             onChange={
                                                (event) => {
                                                   this.setState({
                                                      email: event.target.value,
                                                   });
                                                }
                                             } />
                                       </div>
                                       <div className="form-group mb-3 bottom-inputs">
                                          <label className="form-label" htmlFor="password">
                                             And here’s my <strong>password</strong>:
                                          </label>
                                          <input type="password"
                                             id="password"
                                             className="form-control name-input"
                                             value={password}
                                             onChange={
                                                (event) => {
                                                   this.setState({
                                                      password: event.target.value,
                                                   });
                                                }
                                             } />
                                       </div>
                                    </>
                                 }

                                 <div className='bottom-btns'>
                                    <div className='signup-btn'>
                                       <button type="submit">Sign me up!</button>
                                    </div>
                                    <div className='right-btn'>or
                                       <Link className="btn btn-large btn-signup btn-google" to="/signup">
                                          <img src="https://assets.splitwise.com/assets/fat_rabbit/signup/google-2017-a5b76a1c1eebd99689b571954b1ed40e13338b8a08d6649ffc5ca2ea1bfcb953.png" />
                                          Sign up with Google
                                       </Link>
                                    </div>
                                 </div>
                                 <div className="tos_acceptance">
                                    <div>
                                       <Link to='/signup'>By signing up, you accept the Splitwise Terms of Service.</Link>
                                    </div>
                                    {
                                       isActive &&
                                       <div>
                                          Don't use USD for currency? <Link to='/signup'>Click here</Link>
                                       </div>
                                    }
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </>
            }
         </>
      )
   }
}

const mapStateToProps = (stateInStore) => {
   return {
      user: stateInStore.userData.user
   }
}

const mapDispatchToProps = {
   AddFormData: (payload) => {
      return {
         type: SIGN_IN_USER_DATA,
         payload,
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);