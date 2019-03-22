import React,{Component} from 'react';

class AddCustomer extends Component{
    render(){
        return(
            <div className='customer-container'>
                <div className='customer-form-header'>
                    <h3>WELCOME</h3>
                </div>
                <form>
                    <div className='field'>
                        <label>name</label>
                        <input type='text'/>
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type='email'/>
                    </div>
                    <div className='field'>
                        <label>Password</label>
                        <input type='password'/>
                    </div>
                    <div className='field'>
                        <label>Credit Card</label>
                        <input type='text'/>
                    </div>
                    <div className='field'>
                        <label>Adress</label>
                        <input type='text'/>
                    </div>
                    <div className='field'>
                        <label>City</label>
                        <input type='text'/>
                    </div>
                    <div className='field'>
                        <label>Region</label>
                        <input type='text'/>
                    </div>
                    <div className='field'>
                        <label>Postal Code</label>
                        <input type='text'/>
                    </div>
                    <div className='field'>
                        <label>Phone 1</label>
                        <input type='number'/>
                    </div>
                    <div className='field'>
                        <label>Phone 2</label>
                        <input type='number'/>
                    </div>
                    <div className='field'>
                        <label></label>
                        <button>SIGN UP</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddCustomer;