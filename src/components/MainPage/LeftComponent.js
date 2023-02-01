import React, { Component } from 'react'

class LeftComponent extends Component {
  render() {
    return (
      <div className='right-contianer p-3'>
        <div className='dashboard'>
          <img src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" className="img-fluid" alt="Sample image" />
          <p>Dashboard</p>
        </div>
        <div className='recent-activity'>
          <i class="fa-solid fa-flag"></i>
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
              <i class="fa-solid fa-plus"></i>
              add
            </div>
          </div>
          <div className='sec-text-area'>
            <p>You do not have any groups yet. <i class="fa-solid fa-circle-question"></i></p>
          </div>
        </div>
        <div className='friends'>
          <div className='sec-type'>
            <p>FRIENDS</p>
            <div>
              <i class="fa-solid fa-plus"></i>
              add
            </div>
          </div>
          <div className='sec-text-area'>
            <p>You have not added any friends yet.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LeftComponent