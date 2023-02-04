import React, { Component } from 'react'
import { connect } from 'react-redux';
import { GROUP_DATA, SIGN_IN_USER_DATA } from '../../redux/actions/DataType'


class RightComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: null,
      totalAmount: null,
      totalAmount: null,
      owesYou: null
    }
  }

  updateFriend = (activeFriend) => {
    let totalAmount = null
    let totalMembers = null
    let owesYou = null
    let result = this.props.groups.filter(group => {
      if (group.friends.includes(activeFriend)) {
        return group
      }
    })
    if (result.length > 0) {
      totalAmount = result.map(group => {
        totalMembers += group.friends.length + 1
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
      owesYou = (totalAmount / totalMembers).toFixed(2)
    }

    if (result.length > 0 && owesYou > 0) {
      this.setState({
        owesYou
      })
    }
  }

  updateGroup = (activeGroup) => {
    let totalAmount;
    let paidMembers;

    let result = this.props.groups.filter(group => {
      if (group.groupName === activeGroup) {
        return group
      }
    })

    if (result.length > 0) {
      totalAmount = result[0].howSpent.reduce((sum, amount) => {
        sum += amount.cost
        return sum
      }, 0)

      paidMembers = result[0].paid.reduce((acc, member) => {
        let person = Object.entries(member)
        acc.push(person[0][0])
        return acc
      }, [])
    }

    if (result.length > 0) {
      this.setState({
        howSpent: result[0].howSpent,
        totalAmount: totalAmount,
        members: result[0].friends,
        paidMembers
      })
    }
  }


  componentDidMount() {
    this.updateGroup(this.props.user.activeGroup)
  }

  componentDidUpdate(prevProps) {

    if (this.props.user.activeFriend) {
      if (prevProps.user.activeFriend != this.props.user.activeFriend) {
        this.updateFriend(this.props.user.activeFriend)
      }
    }

    if (this.props.user.activeGroup) {
      if (prevProps.user.activeGroup != this.props.user.activeGroup) {
        this.updateGroup(this.props.user.activeGroup)
      }
    }
  }

  render() {
    let share;
    return (
      <>
        {
          this.props.user.activeGroup &&
          this.state.members !== null &&

          <div className="col mt-3">
            <h5 className='right-title'>GROUP BALANCES</h5>
            <ul className="list-group list-group-flush text-start">
              {
                this.state.members !== null &&
                this.state.members.map((member, index) => {

                  share = (this.state.totalAmount / (this.state.members.length + 1)).toFixed(2)
                  let link = `https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-grey${index + 1}-100px.png`

                  return (
                    <li className='right-part-member' key={member}>
                      <div className='image'>
                        <img className="rounded-circle" src={link} />
                      </div>
                      <div className='member-data'>
                        <p>{member}</p>
                        <div className='text-danger'>
                          <span>owes</span>
                          {
                            this.state.paidMembers
                              &&
                              !this.state.paidMembers.find(person => {
                                if (person == member) {
                                  return true;
                                } else {
                                  return false;
                                }
                              }) ?
                              <span className='h5'> ${share}</span>
                              : <span className='h5'> $0.00</span>
                          }
                        </div>
                      </div>
                    </li>
                  )
                }, () => {
                  this.props.AddFormData({
                    activeGroup: null
                  })
                })
              }

              <li className='right-part-member'>
                <div className='image'>
                  <img className="rounded-circle" src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-ruby38-50px.png" />
                </div>
                <div className='member-data'>
                  <p>{this.props.user.name}</p>
                  <div className='text-success'>
                    gets back
                    {
                      ` $${share * ((this.state.members.length) - this.state.paidMembers.length)}`
                    }
                  </div>
                </div>
              </li>
            </ul>
          </div>
        }

        {
          this.props.user.activeFriend &&
          <div className='right-component container mt-5 right-component-friend'>
            <h5>YOUR BALANCE</h5>
            <h6>
              {this.props.user.activeFriend} owes you
            </h6>
            <strong>${this.state.owesYou}</strong>
          </div>
        }

        <div className='container mt-4 right-component'>
          <h5>
            HEY THERE !
          </h5>
          <div className='right-textContainer'>
            <p>It looks like you use an ad blocker. That’s cool! So do we :)</p>
            <p>Please support Splitwise by telling your friends about us!</p>
            <div className='social'>
              <button className='facebook'>
                <img src='https://secure.splitwise.com/assets/fat_rabbit/social/facebook.png'></img> Share</button>
              <button className='tweet'>
                <img src='https://secure.splitwise.com/assets/fat_rabbit/social/twitter.png'></img> Tweet</button>
            </div>
          </div>
        </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(RightComponent);