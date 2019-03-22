import React,{ Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component{
    render(){
        return(
            <nav className='nav-bar'>
                <ul>
                    <li>
                        <Link to='/'>Liliane Shop</Link>
                    </li>
                </ul>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Categories</Link></li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                   
                </ul>
                <ul>
                    <li>
                        <Link to='/customer'>Sign up</Link>
                    </li>
                    <li><i className='fa fa-shopping-cart'></i></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;