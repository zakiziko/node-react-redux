import React,{Component} from 'react';
import ImageDisplayer from './imageDisplayer.component.jsx';
import { Link } from 'react-router-dom';
class ProductDisplayer extends Component{
    render(){
        let nbr = -1;
        return(
            this.props.data.map(product=>{
                nbr+=1;
                let showMore = false;
                if(nbr>=this.props.min && nbr<this.props.max){
                    return(
                        <div className="prod-container" key={product.product_id}>
                            <ImageDisplayer showMore={showMore} image={product.image} image_2={product.image_2}/>
                            <div className="prod-desc">
                                <h4>
                                <Link to={`/product/${product.product_id}`}>{product.prodName}</Link> </h4>
                            <div className="price">
                                {product.discounted_price > 0 ? 
                                    <p>
                                        <label style={{textDecoration:'line-through',color:'red'}}>{product.price}$ {" "} </label>
                                        <label style={{color:'black',fontWeight:'700',paddingLeft:'10px'}}>{product.discounted_price} $</label>
                                    </p>
                                : <label style={{color:'black',fontWeight:'700'}}>{product.price}$ {" "} </label>}
                            </div>
                            </div>
                            
                        </div>
                    )
                }
            })
        )
    }
}

export default ProductDisplayer;
