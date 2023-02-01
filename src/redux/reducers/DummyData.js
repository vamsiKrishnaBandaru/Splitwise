import { GROUP_DATA } from "../actions/DataType";

const initialState = {
   group: [
      {
         groupName: 'Bangalore Trip',
         friends: [
            "Bob",
            "joe",
            "Smith"
         ],
         totalAmount: 1500
      },
      {
         groupName: 'Saturday Night',
         friends: [
            "Bob",
            "joe",
            "Smith"
         ]
         ,
         totalAmount: 1500
      }
   ]
}

const DummyData = (state = initialState, action) => {
   console.log('groupdata:', action)
   switch (action.type) {
      case GROUP_DATA: 
      return {
         ...state,
         group: {
            ...state.group,
            ...action.payload
         }
      };
      default:
         return state;
   }
}

export default DummyData;