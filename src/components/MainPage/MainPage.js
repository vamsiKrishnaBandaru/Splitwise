import React, { Component } from 'react'
import Header from '../Header/Header'
import LeftComponent from './LeftComponent'
import MiddleComponent from './MiddleComponent'
import RightComponent from './RightComponent'

class MainPage extends Component {
   render() {
      return (
         <>
            <Header />
            <div className="container">
               <div className="row">
                  <div className="col">
                     <LeftComponent />
                  </div>
                  <div className="col-lg-6 col">
                     <MiddleComponent />
                  </div>
                  <div className="col">
                     <RightComponent />
                  </div>
               </div>
            </div>
         </>
      )
   }
}

export default MainPage