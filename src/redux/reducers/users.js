import { v4 as uuidv4 } from 'uuid'

const initialState = {
   user: [],
};

const storeData = (state = initialState, action) => {
   switch (action.type) {
      case 'ADD_USER_DATA':

         return {
            ...state,
            user: [
               {
                  id: uuidv4(),
                  ...action.payload,
               },
               ...state.user
            ]
         };

      default:
         return state;
   }
}

export default storeData;
