import { Component } from 'react'
import authService from '../services/authService';


class Logout extends Component {
    componentDidMount() {
        // localStorage.removeItem('token')
        authService.logout()
        window.location = '/'
    }
    render() { 
        return null;
    }
}
 
export default Logout;