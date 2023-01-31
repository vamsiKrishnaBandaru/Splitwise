import { createStore } from "redux";

import rootReducer from "./reducers/users";

export default createStore(
   rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (noop) => noop
);