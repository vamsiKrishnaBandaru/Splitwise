import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SIGN_IN_USER_DATA } from '../../redux/actions/DataType'

class FriendActiveSatate extends Component {
   constructor(props) {
      super(props)
      this.state = {
         mutualGroups: null
      }
   }
   updateData = (activeFriend) => {
      let result = this.props.groups.filter(group => {
         if (group.friends.includes(activeFriend)) {
            return group
         }
      })
      console.log(result)
      if (result.length > 0) {
         this.setState({
            mutualGroups: result
         })
      }
   }
   componentDidMount() {
      this.updateData(this.props.user.activeFriend)
   }
   componentDidUpdate(prevProps) {
      if (prevProps.user.activeFriend != this.props.user.activeFriend) {
         this.updateData(this.props.user.activeFriend)
      }
   }
   render() {
      return (
         <>
            {
               this.state.mutualGroups &&
               <div className='container'>
                  <ul className='list-group mt-2 mx-2'>

                     {
                        this.state.mutualGroups.map((group) => {
                           return (
                              <li key={group.groupName} className="list-group-item message-container mt-1">
                                 <div className='message-date group-name-date'>
                                    <div>
                                       <p>FEB</p>
                                       <p>02</p>
                                    </div>
                                    <div className='group-name-container'>
                                       <img src='https://secure.splitwise.com/assets/fat_rabbit/group-icon.png'>
                                       </img>
                                       <h6>{group.groupName}</h6>
                                    </div>
                                 </div>
                                 <div className='spent-status'>
                                    <div className='lent'>
                                       <p>{this.props.user.name} owes you</p>
                                       <strong>$</strong>
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

export default connect(mapStateToProps, mapDispatchToProps)(FriendActiveSatate);