import { GROUP_DATA, UPDATE_COMMENT } from "../actions/DataType";

const initialState = {
   groups: [
      {
         groupName: 'Bangalore Trip',
         friends: [
            "Jhon",
            "Smith",
            "Bob",
         ],
         howSpent: [
            {
               message: 'Hotel',
               cost: 9800,
               comments: []
            },
            {
               message: 'Food',
               cost: 3500,
               comments: []
            },
            {
               message: 'Drinks',
               cost: 6500,
               comments: []
            }, {
               message: 'For Petrol',
               cost: 5200,
               comments: []
            }
         ],
         paid: [
            {
               Smith: 6250,
            },
            {
               Bob: 6250,
            }
         ]
      },

      {
         groupName: 'Saturday Night',
         friends: [
            "Bob",
            "Smith"
         ],
         howSpent: [
            {
               message: 'For Drinks',
               cost: 8500,
               comments: []
            },
            {
               message: 'For Food',
               cost: 3500,
               comments: []
            }, {
               message: 'Hotel',
               cost: 9800,
               comments: []
            }
         ],
         paid: []
      },

      {
         groupName: 'New Year Party',
         friends: [
            "Bob",
            "Jhon",
            "Smith",
            "Rahul"
         ],
         howSpent: [
            {
               message: 'Driks',
               cost: 14200,
               comments: []
            },
            {
               message: 'Food',
               cost: 5000,
               comments: []
            },
            {
               message: 'For Cake',
               cost: 800,
               comments: []
            }
         ],
         paid: [
            {
               Rahul: 4000,
            },
            {
               Bob: 4000,
            },
            {
               Jhon: 4000,
            },
            {
               Smith: 4000,
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
         howSpent: [
            {
               message: 'Decoration',
               cost: 5200,
               comments: []
            },
            {
               message: 'For Cake',
               cost: 1500,
               comments: []
            },
            {
               message: 'Drinks',
               cost: 15000,
               comments: []
            }
         ],
         paid: [
            {
               Pavan: 3616.67
            }
         ]
      },
      {
         groupName: 'Room expenses',
         friends: [
            "Jhon",
            "Bob",
         ],
         howSpent: [
            {
               message: 'vegetables',
               cost: 300,
               comments: []
            },
            {
               message: 'Water Tin',
               cost: 20,
               comments: []
            }
         ],
         paid: [
            {
               Jhon: 106.67,
            },
            {
               Bob: 106.67,
            }
         ]
      },

      {
         groupName: 'Avatar Movie at PVR',
         friends: [
            "Pavan",
            "Bob",
            "Jhon",
         ],
         howSpent: [
            {
               message: 'Tickets',
               cost: 5200,
               comments: []
            },
            {
               message: 'Food',
               cost: 1500,
               comments: []
            }
         ],
         paid: [
            {
               Bob: 1675
            }
         ]
      },
   ]
}


const DummyData = (state = initialState, action) => {
   // console.log(action, "action")
   switch (action.type) {
      case GROUP_DATA:
         return {
            ...state,
            groups: {
               ...state.group,
               ...action.payload
            }
         };
      // case UPDATE_COMMENT: {
      //    return {
      //       ...state,
      //    }
      // }
      default:
         return state;
   }
}

export default DummyData;