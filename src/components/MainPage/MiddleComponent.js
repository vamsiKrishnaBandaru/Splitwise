import React, { Component } from 'react'
import './MainPage.css'
import { GROUP_DATA, SIGN_IN_USER_DATA } from '../../redux/actions/DataType'
import { connect } from 'react-redux';
import GroupActiveState from './GroupActiveState';


class MiddleComponent extends Component {
   constructor(props) {
      super(props)
      this.state = {
         totalAmount: null
      }
   }

   componentDidMount() {
      let totalAmount = this.props.groups.reduce((acc, group) => {
         acc += group.totalAmount
         return acc
      }, 0)
      this.setState({
         totalAmount
      })
   }
   render() {
      return (
         <section className='middle-component-container'>
            <div className="middle-nav">
               <h3>
                  DashBoard
               </h3>
               <div className='top-btns'>
                  <div className='signup-btn'>
                     <button type="submit">Add an expense</button>
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
                                 `$ ${this.state.totalAmount}`
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
               !this.props.user.currentPosition
                  ?
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
                  :
                  <GroupActiveState />
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
