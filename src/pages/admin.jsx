import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Admin extends Component {
    state = {  } 
    render() { 
        return (
            <div className='col-10 offset-1 max-width-1600 mx-auto mt-5'>
            <ul>
                <li><Link to='/admin/addProduct' className='fs-5 text-decoration-none'>Add new product</Link></li>
                <li><Link to='/admin/updateProduct' className='fs-5 text-decoration-none'>Update existing product</Link></li>
            </ul>
            </div>
        );
    }
}
 
export default Admin;