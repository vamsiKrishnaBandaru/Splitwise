import React, { Component } from 'react'
import './MainPage.css'
import { GROUP_DATA, SIGN_IN_USER_DATA } from '../../redux/actions/DataType'
import { connect } from 'react-redux';
import GroupActiveState from './GroupActiveState';
import FriendActiveSatate from './FriendActiveSatate';
import AddAnExpense from './AddAnExpense';
import { Link } from 'react-router-dom';


class MiddleComponent extends Component {
   constructor(props) {
      super(props)
      this.state = {
         totalAmount: null
      }
   }

   componentDidMount() {
      let totalAmount = this.props.groups.map(group => {
         return group.howSpent
      })
         .map(group => {
            return group.reduce((sum, amount) => {
               sum += amount.cost
               return sum
            }, 0)
         })
         .reduce((sum, amount) => {
            sum += amount
            return sum
         })

      this.setState({
         totalAmount
      })
   }

   render() {
      return (
         <section className='middle-component-container'>

            <div className="middle-nav">
               <div className='title-bar'>

                  {
                     !this.props.user.activeGroup &&
                     !this.props.user.activeFriend &&
                     <>
                        <img src='https://s3.amazonaws.com/splitwise/uploads/group/default_avatars/avatar-ruby33-house-50px.png'></img>
                        <span>
                           <h3> DashBoard</h3>
                        </span>
                     </>
                  }

                  {
                     this.props.user.activeGroup &&
                     <>
                        <img src='https://s3.amazonaws.com/splitwise/uploads/group/default_avatars/avatar-ruby33-house-50px.png'></img>
                        <span>
                           <h3>
                              {this.props.user.activeGroup}
                           </h3>
                        </span>
                     </>
                  }

                  {
                     this.props.user.activeFriend &&
                     <div className='frnd-title-img'>
                        <img src='https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-grey4-100px.png'></img>
                        <span>
                           <h3>
                              {this.props.user.activeFriend}
                           </h3>
                        </span>
                     </div>
                  }

               </div>

               <div className='top-btns'>
                  <div className='signup-btn'>
                     <Link to="/addexpense">
                     <button type="submit">Add an expense</button>
                     </Link>
                  </div>
                  <div className='signup-btn settle-up'>
                     <button type="submit">Settle Up</button>
                  </div>
               </div>
            </div>

            {
               <table className="table table-bordered">
                  <tbody>
                     <tr>
                        <td scope="col">
                           <div className="flex-grow-1">
                              <p className="mb-1 font-weight-light">total balance</p>
                              <p className="font-weight-light price">{
                                 `$${this.state.totalAmount}`
                              }</p>
                           </div>
                        </td>
                        <td scope="col">
                           <div className="flex-grow-1">
                              <p className="mb-1 font-weight-light">you owe</p>
                              <p className="font-weight-light price">$0</p>
                           </div>
                        </td>
                        <td scope="col">
                           <div className="flex-grow-1">
                              <p className="mb-1 font-weight-light">you are owed</p>
                              <p className="font-weight-light price">$2560</p>
                           </div>
                        </td>
                     </tr>
                  </tbody>
               </table>
            }

            {
               (!this.props.user.activeGroup && !this.props.user.activeFriend)
               &&
               <div className='row middle-bottom p-4'>
                  <img src='https://assets.splitwise.com/assets/fat_rabbit/person-2d59b69b3e7431884ebec1a55de75a4153a17c4050e6b50051ca90412e72cf96.png'></img>
                  <div className='col middle-bottom-text'>
                     <h3>
                        Welcome to Splitwise!
                     </h3>
                     <p>
                        Splitwise helps you split bills with friends.
                     </p>
                     <p>
                        Click “Add an expense” above to get started, or invite some friends first!
                     </p>
                     <div className='signup-btn'>
                        <button type="submit">
                           <i className="fa fa-plus"></i> <i className='fa fa-user user'></i>
                           Add friends on Splitwise
                        </button>
                     </div>
                  </div>
               </div>
            }

            {
               this.props.user.activeGroup && <GroupActiveState />
            }

            {
               this.props.user.activeFriend && <FriendActiveSatate />
            }

         </section >
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

export default connect(mapStateToProps, mapDispatchToProps)(MiddleComponent);