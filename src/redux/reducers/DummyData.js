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
         totalAmount: 25000,
         howSpent: [
            {
               message: 'At petrol bunk',
               cost: 5200
            },
            {
               message: 'Food',
               cost: 3500
            },
            {
               message: 'Drinks',
               cost: 6500
            }, {
               message: 'Hotel',
               cost: 9800
            }
         ]
      },

      {
         groupName: 'Saturday Night',
         friends: [
            "Bob",
            "Smith"
         ],
         totalAmount: 6500,
         howSpent: [
            {
               message: 'For Drinks',
               cost: 8500
            },
            {
               message: 'For Food',
               cost: 3500
            }, {
               message: 'Hotel',
               cost: 9800
            }
         ]
      },

      {
         groupName: 'New Year Party',
         friends: [
            "Bob",
            "Jhon",
            "Smith",
            "Rahul"
         ],
         totalAmount: 20000,
         howSpent: [
            {
               message: 'Driks',
               cost: 14200
            },
            {
               message: 'Food',
               cost: 5000
            },
            {
               message: 'For Cake',
               cost: 800
            }
         ]
      },
      {
         groupName: 'Vinodh Birthday Party',
         friends: [
            "Jhon",
            "Pavan",
            "Smith",
            "Bob",
            "Vinodh",
         ],
         totalAmount: 26700,
         howSpent: [
            {
               message: 'Decoration',
               cost: 5200
            },
            {
               message: 'For Cake',
               cost: 1500
            },
            {
               message: 'Drinks',
               cost: 20000
            }
         ]
      },
      {
         groupName: 'Room expenses',
         friends: [
            "Jhon",
            "Bob",
         ],
         totalAmount: 320,
         howSpent: [
            {
               message: 'vegetables',
               cost: 300
            },
            {
               message: 'Water Tin',
               cost: 20
            }
         ]
      },
      
      {
         groupName: 'Avatar Movie',
         friends: [
            "Pavan",
            "Bob",
            "Jhon",
         ],
         totalAmount: 6700,
         howSpent: [
            {
               message: 'Tickets',
               cost: 5200
            },
            {
               message: 'Food',
               cost: 1500
            }
         ]
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