import { PRODUCT_LOADER } from "../constants/index";

let initialState={};
const productReducer = (state=initialState,action)=>{
    switch (action.type) {
        case PRODUCT_LOADER:
            return{...state,
                products:action.payload
            };
        default:
            return state;
    }
}

export default productReducer;