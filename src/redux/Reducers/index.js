import { combineReducers } from "redux";

import formReducer from "./form.js";
import loginReducer from "./login.js";
import queryReducer from "./query.js";
import settingReducer from "./setting.js";
import tableReducer from "./table.js";

const allReducers = combineReducers({
  login: loginReducer,
  setting: settingReducer,
  form: formReducer,
  table: tableReducer,
  query: queryReducer,
});

export default allReducers;
