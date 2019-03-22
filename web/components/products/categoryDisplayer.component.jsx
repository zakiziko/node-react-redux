import React,{Component} from 'react';
import ProductDisplayer from './productsDisplayer.component.jsx';
class CategoryDisplayer extends Component{
    constructor(props){
        super(props);
        this.state={
            max:4,
            min:0
        }
    }
    seeMore(e){
        e.preventDefault();
        let min = this.state.min+4;
        let max = this.state.max+4;
        if(min<this.props.data.length){
            this.setState({min:min,max:max});
        }else{
            console.log("enough");
        }
    }
    seeLess(e){
        e.preventDefault();
        let min = this.state.min-4;
        let max = this.state.max-4;
        if(max>0){
            this.setState({min:min,max:max});
        }else{
            console.log("enough");
        }
        
      
    }
    render(){
        return(
            <div style={{marginTop:'25px'}}>
                <div className='category-container'>
                    <div className='cat-title'>
                        {this.props.category}
                    </div>
                    <ProductDisplayer data={this.props.data} min={this.state.min} max={this.state.max}/>
                    <button className='seeMore' onClick={(e)=>this.seeMore(e)}>
                        <i className='fa fa-angle-right'></i>
                    </button>
                    <button className='seeLess' onClick={(e)=>this.seeLess(e)}> <i className='fa fa-angle-double-left'></i> </button>
                </div>
            </div>
            
        )
    }
}

export default CategoryDisplayer;
