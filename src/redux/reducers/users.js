import { SIGN_IN_USER_DATA } from '../actions/FormData'

const initialState = {
   user: {
      name: '',
      email: '',
      isSignIn: false,
   }
}

const storeData = (state = initialState, action) => {
   switch (action.type) {
      case SIGN_IN_USER_DATA: return {
         ...state,
         user: {
            ...state.user,
            ...action.payload
         }
      };
      default: return state;
   }
}


export default storeData;