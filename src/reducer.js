import { combineReducers } from "redux";

import changeLanguge from "./components/reducers/changeLang";

const rootReducer = combineReducers({
    lang : changeLanguge
})

export default rootReducer