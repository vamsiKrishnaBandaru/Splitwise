import React, { Component } from 'react'
import { connect } from 'react-redux';
import { GROUP_DATA, SIGN_IN_USER_DATA } from '../../redux/actions/DataType'

class GroupActiveState extends Component {
   constructor(props) {
      super(props)
      this.state = {
         howSpent: null,
         totalAmount: null,
         members: null,
      }
   }
   updateData = (currentPosition) => {
      let result = this.props.groups.filter(group => {
         if (group.groupName === currentPosition) {
            return group
         }
      })
      if (result.length > 0) {
         this.setState({
            howSpent: result[0].howSpent,
            totalAmount: result[0].totalAmount,
            members: result[0].friends,
         })
      }
   }
   componentDidMount() {
      this.updateData(this.props.user.currentPosition)
   }
   componentDidUpdate(prevProps) {
      if (prevProps.user.currentPosition != this.props.user.currentPosition) {
         this.updateData(this.props.user.currentPosition)
      }
   }

   render() {
      return (
         <>
            {
               this.state.howSpent &&
               <div className='container'>
                  <ul className='list-group mt-2 mx-2'>

                     {
                        this.state.howSpent
                        &&
                        this.state.howSpent.map(data => {
                           return (
                              <li key={data.message} className="list-group-item message-container">
                                 <div className='row message-date'>
                                    <div className='col-2'>
                                       <p>FEB</p>
                                       <p>02</p>
                                    </div>
                                    <div className='col'>
                                       <h6>{data.message}</h6>
                                    </div>
                                 </div>
                                 <div className='spent-status'>
                                    <div>
                                       <p>You Paid</p>
                                       <strong>${data.cost}</strong>
                                    </div>
                                    <div className='lent'>
                                       <p>You lent</p>
                                       <strong>{`$${(
                                          data.cost -
                                          (data.cost / (this.state.members.length + 1)).toFixed(2))
                                          }`}</strong>
                                    </div>
                                 </div>
                              </li>
                           )
                        })
                     }
                  </ul>
               </div>
            }
         </>
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

export default connect(mapStateToProps, mapDispatchToProps)(GroupActiveState);