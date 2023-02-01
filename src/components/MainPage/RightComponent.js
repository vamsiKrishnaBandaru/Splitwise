import React, { Component } from 'react'

class RightComponent extends Component {
  render() {
    return (
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
    )
  }
}

export default RightComponent