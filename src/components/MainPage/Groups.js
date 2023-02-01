import React, { Component } from 'react'
import { connect } from 'react-redux';

class Groups extends Component {
   render() {
      return (
         <div><i class="fa-solid fa-tag"></i>
         </div>
      )
   }
}

const mapStateToProps = (stateInStore) => {
   return {
      user: stateInStore.user
   }
}

export default connect(mapStateToProps, null)(Groups);