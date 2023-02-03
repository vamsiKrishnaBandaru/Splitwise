import React, { Component } from 'react'
import { connect } from 'react-redux';
import { GROUP_DATA, SIGN_IN_USER_DATA } from '../../redux/actions/DataType'
import ListGroupCard from './ListGroupCard';

class GroupActiveState extends Component {
   constructor(props) {
      super(props)
      this.state = {
         howSpent: null,
         totalAmount: null,
         members: null,
         listActive: null,
         paidStatus: null,
      }
   }

   updateData = (activeGroup) => {
      let result = this.props.groups.filter(group => {
         if (group.groupName === activeGroup) {
            return group
         }
      })
      if (result.length > 0) {
         let totalAmount = result[0].howSpent.reduce((sum, amount) => {
            sum += amount.cost
            return sum
         }, 0)
         this.setState({
            howSpent: result[0].howSpent,
            totalAmount: totalAmount,
            members: result[0].friends,
            paidStatus: result[0].paid
         })
      }
   }

   componentDidMount() {
      this.updateData(this.props.user.activeGroup)
   }

   componentDidUpdate(prevProps) {
      if (prevProps.user.activeGroup != this.props.user.activeGroup) {
         this.updateData(this.props.user.activeGroup)
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
                        this.state.howSpent.map(data => {
                           return (
                              <li key={data.message} className="list-group-item message-container" >
                                 <ListGroupCard data={data}
                                    members={this.state.members}
                                    totalAmount={this.state.totalAmount}
                                    paidStatus={this.state.paidStatus} />
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