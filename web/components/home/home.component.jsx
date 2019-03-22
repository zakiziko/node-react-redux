import React,{ Component } from "react";
import { connect } from 'react-redux';
import { loadProduct } from '../../actions/product';

function mapDispatchToProps(dispatch){
    return{
        loadProduct:()=>dispatch(loadProduct())
    }
}

class HomeTemplate extends Component{
    componentDidMount(){
        this.props.loadProduct();
    }
    render(){
        return(
            <div style={{height:'100vh',background:'#888',textAlign:"center",alignContent:'center',position:'relative'}}>
                <h1 style={{position:'absolute',top:'200px',left:'300px',color:'aqua'}}>Home</h1>
            </div>
        )
    }
}
const Home = connect(null,mapDispatchToProps)(HomeTemplate)
export default Home;