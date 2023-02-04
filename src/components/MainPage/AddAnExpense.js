import React, { Component } from 'react'
import validator from 'validator'
import { SIGN_IN_USER_DATA, UPDATE_MESSAGE, GROUP_DATA } from '../../redux/actions/DataType'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SuccessLoginMessage from '../SignupForm/SuccessMessage'

class AddAnExpense extends Component {
   constructor(props) {
      super(props)
      this.state = {
         description: "",
         isActive: true,
         cost: "",
         isErrors: false,
         signUpStatus: false,
         ifFilled: false
      }
   }
   handleSubmit = (event) => {
      event.preventDefault()
      if (this.state.isActive) {

         const {
            description,
            cost
         } = this.state

         let errors = {}

         if (description === "" || description.trim() === "") {
            errors.description = "description name can't be blank"
         }

         if (cost === "" || cost.trim() === "" || !validator.isNumeric(cost)) {
            errors.cost = "cost must be a number"
         }

         if (Object.keys(errors).length === 0) {
            this.setState(
               {
                  ifFilled: true,
                  signUpStatus: true,
                  isErrors: false,
               }, () => {
                  let result = this.props.groups.filter(group => {
                     return group.groupName == this.props.user.activeGroup
                  })
                  result[0].howSpent.unshift(
                     {
                        message: this.state.description,
                        cost: Number(this.state.cost),
                        comments: []
                     }
                  )
                  this.props.AddMessage({
                     groupName: this.props.user.activeGroup,
                     update: result[0]
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
      const { errors,
         description,
         cost,
         isErrors
      } = this.state
      return (
         <>
            <div className="toppad">
            </div>
            <div className='container'>
               <div className="d-flex justify-content-center gap-md-5">
                  <div className="d-flex justify-content-center gap-md-5">
                     <div className="col-md-2 signup-left-logo">
                        <img src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" className="img-fluid" alt="Sample image" />
                     </div>
                     <div className="form-container">

                        {
                           isErrors &&
                           <div className="error_messages">
                              <span className="error">The following errors occurred:</span>
                              <div id="errorExplanation">
                                 <ul>
                                    {
                                       errors.description &&
                                       <li>{errors.description}</li>
                                    }

                                    {
                                       errors.cost &&
                                       <li>{errors.cost}</li>
                                    }
                                 </ul>
                              </div>
                           </div>
                        }

                        <form onSubmit={this.handleSubmit} >
                           <div className="form-outline mb-3">
                              <label className="form-label text-secondary" htmlFor="description">Enter a description
                              </label>
                              <input type="text"
                                 id="description"
                                 className="form-control form-control-lg name-input"
                                 value={description}
                                 onChange={
                                    (event) => {
                                       this.setState({
                                          description: event.target.value,
                                          isActive: true
                                       });
                                    }
                                 }
                              />
                           </div>

                           {
                              this.state.isActive &&
                              <>
                                 <div className="form-group mb-3 bottom-inputs">
                                    <label className="form-label" htmlFor="cost"><strong className='text-secondary'>Enter Amount</strong>:
                                    </label>
                                    <div className='price-input'>
                                       <input type="text"
                                          id="cost"
                                          className="form-control name-input"
                                          placeholder='$0.00'
                                          value={cost}
                                          onChange={
                                             (event) => {
                                                this.setState({
                                                   cost: event.target.value,
                                                });
                                             }
                                          } />
                                    </div>
                                 </div>
                                 <div className='bottom-btns'>
                                    <div className='signup-btn mt-2 Add-btn'>
                                       <button type="submit">Add</button>
                                    </div>
                                 </div>
                                 {
                                    this.state.signUpStatus && this.state.ifFilled &&
                                    <div className="Success-login-msg">
                                       <div className="d-flex align-items-center justify-content-center">
                                          <div className="alert alert-success px-5 w-50" role="alert">
                                             Your update was successful !
                                          </div>
                                       </div>
                                       <Link to="/mainpage">
                                          <button type="button" className="btn btn-success mt-4">
                                             Go to DashBoard <i className="fa-solid fa-arrow-right"></i></button>
                                       </Link>
                                    </div>

                                 }
                              </>
                           }

                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </>
      )
   }
}
const mapStateToProps = (stateInStore) => {
   return {
      user: stateInStore.userData.user,
      groups: stateInStore.DummyData.groups
   }
}

const mapDispatchToProps = {
   AddMessage: (payload) => {
      return {
         type: UPDATE_MESSAGE,
         payload,
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAnExpense);