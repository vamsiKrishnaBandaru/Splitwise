import React, { Component } from 'react'
import './MainPage.css'

class MiddleComponent extends Component {
   render() {
      return (
         <section>
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
         </section>
      )
   }
}

export default MiddleComponent