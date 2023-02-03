import React, { Component } from 'react'
import { connect } from 'react-redux';
import { GROUP_DATA, SIGN_IN_USER_DATA } from '../../redux/actions/DataType'

class ListGroupCard extends Component {
   constructor(props) {
      super(props)
      this.state = {
         listActive: false,
      }
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

   render() {
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
               <div className='statusOf-prices row'>
                  <div className='status-left col'>
                     <img src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-ruby38-50px.png" />

                     <stong> {
                        this.props.user.name
                     } </stong> paid <strong>${this.props.totalAmount}</strong> and <span className='text-secondary'> owes</span> <strong> ${(this.props.totalAmount / (this.props.members.length) + 1).toFixed(2)}</strong>
                     {
                        this.props.members.map((member, index) => {
                           let link = `https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-grey${index + 1}-100px.png`
                           return (
                              <div className='mt-4'>
                                 <span>
                                    <img src={link}></img></span><span>
                                    <strong> {member}</strong> <span className='text-secondary'> owes</span> <strong> ${(this.props.totalAmount / (this.props.members.length) + 1).toFixed(2)}</strong>
                                 </span>
                              </div>
                           )
                        })
                     }
                  </div>
                  <div className='status-right col'>
                     <strong>Spending by category</strong>
                     <p className='text-secondary'>{this.props.user.activeGroup}::{this.props.data.message}</p>
                  </div>
               </div>
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
   AddFormData: (payload) => {
      return {
         type: SIGN_IN_USER_DATA,
         payload,
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListGroupCard);