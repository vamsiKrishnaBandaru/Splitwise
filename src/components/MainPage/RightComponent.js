import React, { Component } from 'react'
import { connect } from 'react-redux';
import { GROUP_DATA, SIGN_IN_USER_DATA } from '../../redux/actions/DataType'


class RightComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: null,
      totalAmount: null,
      totalAmount: null
    }
  }

  updateData = (activeGroup) => {

    let result = this.props.groups.filter(group => {
      if (group.groupName === activeGroup) {
        return group
      }
    })

    if (result.length > 0) {
      this.setState({
        members: result[0].friends,
        totalAmount: result[0].totalAmount
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
      <>{
        this.state.members !== null &&

        <div className="col mt-3">
          <h5 className='right-title'>GROUP BALANCES</h5>
          <ul className="list-group list-group-flush text-start">
            {
              this.state.members !== null &&
              this.state.members.map((member, index) => {
                
                let oweAmount = (this.state.totalAmount / (this.state.members.length)).toFixed(2)
                let link = `https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-grey${index + 1}-100px.png`
                
                return (
                  <li className='right-part-member' key={member}>
                    <div className='image'>
                      <img className="rounded-circle" src={link} />
                    </div>
                    <div className='member-data'>
                      <p>{member}</p>
                      <div className='text-danger'>
                        <span>owes</span><span>{` $${oweAmount}`}</span></div>
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
                  gets back{` $${(this.state.totalAmount - this.state.totalAmount / (this.state.members.length + 1)).toFixed(2)}`}
                </div>
              </div>
            </li>
          </ul>
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