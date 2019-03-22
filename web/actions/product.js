import axios from "axios";
import { PRODUCT_LOADER } from "../constants/index";


export function loadProduct(){
    return(dispatch=>{
        axios.get('/api/products').then(res=>{
            dispatch(loadProductAsync(res.data));
        });
    });
}

export function loadProductByDept(id_Dept){
    return(dispatch=>{
        axios.get('/api/products/departement/'+id_Dept).then(res=>{
            dispatch(loadProductAsync(res.data));
        });
    });
}

function loadProductAsync(prods){
    return{
        type: PRODUCT_LOADER,
        payload:prods
    }
}