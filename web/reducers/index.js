import productReducer from './product';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    product : productReducer
});
export default rootReducer;