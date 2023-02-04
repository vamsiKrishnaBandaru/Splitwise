import React, { Component } from 'react'
import { connect } from 'react-redux';
import { GROUP_DATA, SIGN_IN_USER_DATA, UPDATE_COMMENT } from '../../redux/actions/DataType'
import { v4 as uuidv4 } from "uuid"
class ListGroupCard extends Component {
   constructor(props) {
      super(props)
      this.state = {
         listActive: false,
         paidMembers: false,
         value: "",
         textarea: [],
      }
   }
   deleteComment = () => {
      this.setState({
         textarea: []
      })
   }
   addClassName = () => {
      if (this.state.listActive) {
         this.setState({
            listActive: false
         })
      } else {
         this.setState({
            listActive: true
         })
      }
   }

   handelChange = (event) => {
      if (this.props.user.activeGroup) {
         let value = event.target.value
         if (value !== "" && value !== null && value.trim() !== "") {
            this.setState({
               value: event.target.value
            })
         }
      }
   }

   Handelform = (event) => {
      event.preventDefault()
      if (this.state.textarea !== null) {
         this.setState({
            textarea: this.state.value,
            value: ""
         })
      }
   }

   paidMembers = () => {
      let result = this.props.paidStatus.reduce((acc, member) => {
         let person = Object.entries(member)
         acc.push(String(person[0][0]))
         return acc
      }, [])
      if (result.length > 0) {
         this.setState({
            paidMembers: result
         })
      }
   }
   componentDidMount() {
      this.paidMembers()
   }
   componentDidUpdate(prevProps) {
      if (this.props.user.activeGroup) {
         if (prevProps.user.activeGroup != this.props.user.activeGroup) {
            this.setState({
               textarea: "",
               value: ""
            })
         }
      }
   }

   render() {
      let share = null
      return (
         <div className='list-box'>
            <div className='list-data-container' onClick={() => {
               this.addClassName()
            }}>
               <div className='row message-date'>
                  <div className='col-2 mt-2'>
                     <p>FEB</p>
                     <p>02</p>
                  </div>
                  <div className='col msg-container'>
                     <img src='https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png'></img><span> {this.props.data.message}
                     </span>
                  </div>
               </div>

               <div className='spent-status'>
                  <div>
                     <p>You Paid</p>
                     <strong>${this.props.data.cost}</strong>
                  </div>
                  <div className='lent'>
                     <p>You lent</p>
                     <strong>{`$${(
                        this.props.data.cost -
                        (this.props.data.cost / (this.props.members.length + 1)).toFixed(2))
                        }`}</strong>
                  </div>
               </div>
            </div>
            <div className={!this.state.listActive ? "Show-list-info" : ""}>
               <div className='row Show-list-header statusOf-prices pt-3'>
                  <div className='col-3'>
                     <img src='https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png'></img>
                  </div>
                  <div className='col'>
                     <h5>{this.props.data.message}</h5>
                     <h4><strong> ${this.props.data.cost}</strong></h4>
                     <p>Added by Vamsi Krishna B. on February 1, 2023</p>
                     <p>Last updated by Vamsi Krishna B. on February 1, 2023</p>
                     <div className='signup-btn top-btns list-btn'>
                        <button className='button'>Edit expense</button>
                     </div>
                  </div>
               </div>
               <div className='row owe-list'>
                  <div className='status-left col'>
                     <img src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-ruby38-50px.png" />

                     <strong> {
                        this.props.user.name
                     } </strong> paid <strong>${this.props.data.cost}</strong> and <span className='status-right px-1'>owes</span> <strong> ${(this.props.data.cost / ((this.props.members.length) + 1)).toFixed(2)}</strong>

                     {
                        this.props.members.map((member, index) => {
                           share = (this.props.data.cost / (this.props.members.length + 1)).toFixed(2)
                           let link = `https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-grey${index + 1}-100px.png`
                           return (
                              <div className='mt-4' key={member}>
                                 <span>
                                    <img src={link}></img></span><span>
                                    <strong> {member}</strong> <span className='status-right px-1'>owes</span>
                                    {
                                       this.state.paidMembers !== false &&
                                       (
                                          !this.state.paidMembers.find(person => {
                                             if (person == member) {
                                                return true
                                             } else {
                                                return false
                                             }
                                          }) ?
                                             <strong> ${(this.props.data.cost / (this.props.members.length + 1)).toFixed(2)}
                                             </strong> : <strong> $0.00</strong>
                                       )
                                    }
                                    {
                                       this.state.paidMembers === false &&
                                       <strong> ${(this.props.data.cost / (this.props.members.length + 1)).toFixed(2)}
                                       </strong>
                                    }
                                 </span>
                              </div>
                           )
                        })
                     }

                  </div>
                  <div className='status-right col'>
                     <strong>Spending by category</strong>
                     <p className='txt-secondary'>{this.props.user.activeGroup}::{this.props.data.message}</p>
                     <div className='row container mt-2'>
                        <div className='row p-2'>
                           <h6 className='col-4'>December</h6>
                           <div className='col-4 month-status'> </div>
                           <h6 className='col-4'>$0.00</h6>
                        </div>
                        <div className='row p-2'>
                           <h6 className='col-4'>January</h6>
                           <div className='col-4 month-status'> </div>
                           <h6 className='col-4'>$0.00</h6>
                        </div>
                        <div className='row p-2'>
                           <h6 className='col-4'>February</h6>
                           <div className='February month-status col-4'> </div>
                           <h6 className='col-4'>${this.props.data.cost.toFixed(2)}</h6>
                        </div>
                     </div>
                     <p className='text-primary'>View more charts</p>
                     <p><i className="fa fa-comment my-2"></i> NOTES AND COMMENTS</p>

                     <form onClick={(event) => {
                        this.Handelform(event)
                     }}>
                        <div className='form-group'>
                           <textarea placeholder="Add a comment"
                              cols="40"
                              rows="2"
                              onChange={(event) => {
                                 this.handelChange(event)
                              }}
                              value={this.state.value}
                           >
                           </textarea>
                        </div>
                        <div className='signup-btn top-btns list-btn post-btn'>
                           <button className='submit'>post</button>
                        </div>
                     </form>

                     {
                        this.state.textarea.length > 1 &&
                        <ul className='posts mt-4'>
                           <li className='comment-box'>
                              <div>{this.state.textarea}</div><div className='close' onClick={() => {
                                 this.deleteComment()
                              }}>x</div>
                           </li>
                        </ul>
                     }

                  </div>
               </div>
               <ul className='paid-list'>
                  {
                     this.state.paidMembers &&
                     <>
                        <h5>Transactions</h5>
                        {
                           this.state.paidMembers.map((member) => {
                              return (
                                 <li className='paid-person-container' key={member}>
                                    <i className="fa-regular fa-circle-check mx-1"></i>
                                    <span> <strong> {member}</strong></span><span className=''> paid his share of </span><strong>${share}</strong>
                                 </li>
                              )
                           })
                        }
                     </>
                  }
               </ul>

            </div>
         </div>
      )
   }
}

const mapStateToProps = (stateInStore) => {
   return {
      groups: stateInStore.DummyData.groups,
      user: stateInStore.userData.user
   }
}

const mapDispatchToProps = {
   AddToGroup: (payload) => {
      return {
         type: UPDATE_COMMENT,
         payload,
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListGroupCard);