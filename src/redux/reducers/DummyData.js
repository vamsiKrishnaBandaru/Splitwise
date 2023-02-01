import { GROUP_DATA } from "../actions/DataType";

const initialState = {
   groups: [
      {
         groupName: 'Bangalore Trip',
         friends: [
            "Bob",
            "Jhon",
            "Smith"
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
            "Bob",
            "Jhon",
            "Smith",
            "Pavan",
            "Vinodh",
            "Veeru"
         ]
         ,
         totalAmount: 500
      },
      {
         groupName: 'Room expenses',
         friends: [
            "Bob",
            "Jhon",
         ]
         ,
         totalAmount: 500
      },
      {
         groupName: 'Avatar Movie',
         friends: [
            "Bob",
            "Jhon",
            "Pavan"
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