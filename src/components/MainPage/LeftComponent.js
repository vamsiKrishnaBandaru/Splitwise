import React, { Component } from 'react'
import { GROUP_DATA, SIGN_IN_USER_DATA } from '../../redux/actions/DataType'
import { connect } from 'react-redux';

class LeftComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: []
    }
  }

  HandelClickOnGroup = (status) => {
    this.props.AddFormData({
      activeGroup: status,
      activeFriend: null
    })
  }

  HandelClickOnFriends = (status) => {
    this.props.AddFormData({
      activeFriend: status,
      activeGroup: null
    })
  }

  componentDidMount() {
    let Allfriends = this.props.groups.reduce((acc, group) => {
      return acc.concat(group.friends)
    }, [])

    const removeDuplicates = (array) => {

      let unique = array.reduce((acc, curr) => {

        if (!acc.includes(curr)) {
          acc.push(curr);
        }
        return acc;
      }, []);
      return unique;
    }

    const friends = removeDuplicates(Allfriends)

    this.setState({
      friends
    })
  }

  render() {

    return (
      <div className='right-contianer p-3'>

        <div className='dashboard'>
          <img src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" className="img-fluid" alt="Sample image" />
          <p>Dashboard</p>
        </div>

        <div className='recent-activity'>
          <i className="fa-solid fa-flag"></i>
          <h6>
            Recent activity
          </h6>
        </div>

        <div className='expenses row'>
          <i className="fa fa-list col-1 pt-1"></i>
          <p className='col-10'>All expenses</p>
        </div>

        <div className='group'>
          <div className='sec-type'>
            <p>GROUPS</p>
            <div>
              <i className="fa-solid fa-plus"></i>
              add
            </div>
          </div>

          <div className='sec-text-area'>
            {
              // this.props.user.isSignIn ?
              this.props.groups.map((group) => {
                return (
                  <li key={group.groupName}>
                    <h6 onClick={() => {
                      this.HandelClickOnGroup(group.groupName)
                    }}>
                      <i className="fa-solid fa-tag"></i>{group.groupName}</h6>
                  </li>
                )
              })
              // :
              // <div className='intial-sec-content'>
              //   <p>You do not have any groups yet. <i className="fa-solid fa-circle-question"></i></p>
              // </div>
            }
          </div>
        </div>

        <div className='friends'>
          <div className='sec-type'>
            <p>FRIENDS</p>
            <div>
              <i className="fa-solid fa-plus"></i>
              add
            </div>
          </div>

          <div className='sec-text-area'>
            {
              // this.props.user.isSignIn ?

              this.state.friends.map((friend) => {
                return (
                  <li key={friend}>
                    <h6 onClick={() => {
                      this.HandelClickOnFriends(friend)
                    }}><i className="fa fa-user"></i>{friend}</h6>
                  </li>
                )
              })

              //  :
              // <div className='intial-sec-content'>
              //   <p>You have not added any friends yet.</p>
              // </div>
            }
            <div className='invite-box'>
              <div className='invite-header'>
                Invite friends
              </div>
              <div className="invite-input">
                <input className="invite-email" type="email" placeholder="Enter an email address" />
                <button className="btn btn-cancel send-invite">Send invite</button>
              </div>
              <div className='social-left'>
                <div>
                  <button className='facebook'>
                    <img src='https://secure.splitwise.com/assets/fat_rabbit/social/facebook.png'></img> Share</button>
                </div>
                <div>
                  <button className='tweet'>
                    <img src='https://secure.splitwise.com/assets/fat_rabbit/social/twitter.png'></img> Tweet</button>
                </div>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LeftComponent);