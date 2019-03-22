import React,{ Component } from "react";
import axios from 'axios';
class ProductDetailDisplayer extends Component{
    constructor(){
        super();
        this.state={
            product:{}
        }
    }
    componentDidMount(){
        const id = parseInt(this.props.match.params.id);
        axios.get('/api/products/'+id).then(res=>{
            this.setState({product:res.data[0]});
        });
    }
    render(){
        const image = '../../imgs/'+this.state.product.image;
        return(
            <div>
                <div className='product-detail-container'>
                    <div className='product-detail-image'>
                        <img src={image}/>
                    </div>
                    <div className='product-detail-seal'>
                        <h3>{this.state.product.prodName}</h3>
                        <p>{this.state.product.prodDesc}</p>
                        <h4>Style: {this.state.product.categoName}</h4>
                        {this.state.product.discounted_price > 0 ? 
                            <p>
                                <label style={{textDecoration:'line-through',color:'red'}}>{this.state.product.price}$ {" "} </label>
                                <label style={{color:'black',fontWeight:'700',paddingLeft:'20px'}}>{this.state.product.discounted_price} $</label>
                                <label style={{color:'black',paddingLeft:'20px'}}>{Number(100*(this.state.product.price-this.state.product.discounted_price)/this.state.product.price).toFixed(2)} % OFF</label>
                            </p>
                        : <p>
                            <label style={{color:'black',fontWeight:'700'}}>{this.state.product.price}$ {" "} </label>
                            <label>Not Eligible for Discount</label></p>}
                        <select className='select-size'>
                            <option>Choose size</option>
                            <option value='s'>S</option>
                            <option value='m'>M</option>
                            <option value='l'>L</option>
                            <option value='xl'>XL</option>
                            <option value='xxl'>XXL</option>
                        </select>
                        <br/>
                        <button className='add-card-btn'>ADD TO CARD</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetailDisplayer;