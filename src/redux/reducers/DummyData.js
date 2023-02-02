import { GROUP_DATA } from "../actions/DataType";

const initialState = {
   groups: [
      {
         groupName: 'Bangalore Trip',
         friends: [
            "Jhon",
            "Smith",
            "Bob",
         ],
         totalAmount: 25000
      },
      {
         groupName: 'Saturday Night',
         friends: [
            "Bob",
            "Smith"
         ],
         totalAmount: 6500
      },
      {
         groupName: 'New Year Party',
         friends: [
            "Bob",
            "Jhon",
            "Smith",
            "Rahul"
         ]
         ,
         totalAmount: 20000
      },
      {
         groupName: 'Vinodh Birthday Party',
         friends: [
            "Jhon",
            "Pavan",
            "Smith",
            "Bob",
            "Vinodh",
         ]
         ,
         totalAmount: 500
      },
      {
         groupName: 'Room expenses',
         friends: [
            "Jhon",
            "Bob",
         ]
         ,
         totalAmount: 500
      },
      {
         groupName: 'Avatar Movie',
         friends: [
            "Pavan",
            "Bob",
            "Jhon",
         ]
         ,
         totalAmount: 2000
      },
   ]
}

const DummyData = (state = initialState, action) => {
   switch (action.type) {
      case GROUP_DATA:
         return {
            ...state,
            groups: {
               ...state.group,
               ...action.payload
            }
         };
      default:
         return state;
   }
}

export default DummyData;