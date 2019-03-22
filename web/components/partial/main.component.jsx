import React,{ Component } from "react";
import { Switch,Route } from "react-router";
import Products from '../products/products.component.jsx';
import Home from '../home/home.component.jsx';
import ProductDetailDisplayer from '../products/ProductDetailsDisplayer.component.jsx';
import AddCustomer from '../customer/addCustomer.component.jsx';
class Main extends Component{
    render(){
        return(
            <main style={{marginTop:"50px"}}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/products' component={Products} />
                    <Route exact path='/product/:id' component={ProductDetailDisplayer} />
                    <Route exact path='/customer' component={AddCustomer}/>
                </Switch>
            </main>

        )
    }
}
export default Main;