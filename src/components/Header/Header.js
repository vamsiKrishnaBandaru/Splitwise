import { Link } from "react-router-dom";
import './Header.css'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { SIGN_IN_USER_DATA } from "../../redux/actions/DataType";

class Header extends Component {
   constructor(props) {
      super(props)
   }
   render() {
      return (
         <nav className="navbar header">
            <div className="container header-content">
               <img id="logo" src="https://assets.splitwise.com/assets/core/logo-wordmark-horizontal-white-short-c309b91b96261a8a993563bdadcf22a89f00ebb260f4f04fd814c2249a6e05d4.svg" />
               <div className="header-right">
                  <div className="dropdown">

                     <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-ruby38-50px.png" />
                        <span>{this.props.user.name}</span>
                     </button>

                     <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/mainpage"> Your account</Link></li>
                        <li><Link className="dropdown-item" to="/mainpage"> Create a group</Link></li>
                        <li><Link className="dropdown-item" to="/mainpage"> Fairness calculators</Link></li>
                        <li><Link className="dropdown-item" to="/mainpage"> Contact support</Link></li>
                        <li><Link className="dropdown-item" to="/" onClick={() => {
                           this.props.ChangeFormData({
                              name: "",
                              email: "",
                              isSignIn: false,
                              currentPosition: null,
                           });
                        }}>
                           Log out</Link></li>
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
      user: stateInStore.userData.user
   }
}

const mapDispatchToProps = {
   ChangeFormData: (payload) => {
      return {
         type: SIGN_IN_USER_DATA,
         payload,
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);