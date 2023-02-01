import { Link } from "react-router-dom";
import './Header.css'
import React, { Component } from 'react'
import { connect } from 'react-redux';

class Header extends Component {
   constructor(props) {
      super(props)
   }
   render() {
      return (
         <nav className="navbar header">
            <div className="container header-content">
               <Link to="/signup">
                  <img id="logo" src="https://assets.splitwise.com/assets/core/logo-wordmark-horizontal-white-short-c309b91b96261a8a993563bdadcf22a89f00ebb260f4f04fd814c2249a6e05d4.svg" />
               </Link>
               <div className="header-right">
                  <div className="dropdown">

                     {
                        this.props.user.name !== ""
                           ?
                           <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <img src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-ruby38-50px.png" />
                              <span>{this.props.user.name}</span>
                           </button>
                           :
                           <Link to="/signup">
                              <div className='nav-sign-up'>
                                 <button type="submit">Sign up</button>
                              </div>
                           </Link>
                     }

                     <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/"> Your account</Link></li>
                        <li><Link className="dropdown-item" to="/"> Create a group</Link></li>
                        <li><Link className="dropdown-item" to="/"> Fairness calculators</Link></li>
                        <li><Link className="dropdown-item" to="/"> Contact support</Link></li>
                        <li><Link className="dropdown-item" to="/"> Log out</Link></li>
                     </ul>
                  </div>
               </div>
            </div>
         </nav>
      )
   }
}
const mapStateToProps = (stateInStore) => {
   return {
      user: stateInStore.user
   }
}

export default connect(mapStateToProps, null)(Header);