import React,{ Component } from "react";
import CategoryDisplayer from './categoryDisplayer.component.jsx';
import { connect } from 'react-redux';
import { loadProductByDept } from '../../actions/product';

const mapStateToProps = state => {
    return { products: state.product.products };
};

function mapDispatchToProps(dispatch){
    return{
        loadProductByDept:(id)=>dispatch(loadProductByDept(id))
    }
}

class ProductsTemplate extends Component{
    render(){
        const productKeys = Object.keys(this.props.products);
        const products = productKeys.map(category=>{
            return(
                <CategoryDisplayer 
                    category={category} 
                    description={this.props.products[category][0].description} 
                    data={this.props.products[category]} 
                    key={category}/>
            )
        });
        return(
            <div style={{display:'grid',gridTemplateColumns:'2fr 5fr',overflow:'hidden'}}>
                <div style={{marginLeft:'20px'}}>
                    <h5>List Departements</h5>
                    <ul style={{listStyle:'none'}}>
                        <li style={{padding:'8px',cursor:'pointer'}} onClick={()=>this.props.loadProductByDept(1)}>Regional</li>
                        <li style={{padding:'8px',cursor:'pointer'}} onClick={()=>this.props.loadProductByDept(2)} >Nature</li>
                        <li style={{padding:'8px',cursor:'pointer'}} onClick={()=>this.props.loadProductByDept(3)}>Seasonal</li>
                    </ul>
                </div>
                <div>
                    {products}
                </div>
            </div>
        )
    }
}

const Products = connect(mapStateToProps,mapDispatchToProps)(ProductsTemplate);
export default Products;