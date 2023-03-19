import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import authService from '../../services/authService'

const ProtectedRoute = (props) => {
    try{
        authService.getUser()
    }
    catch{
        return <Redirect to='/login'/>
    }
   
    return ( 
        <Route path={props.path} 
          render={
            ()=>{
                return <props.component/>;
            }
        }/>
     );
}
 
export default ProtectedRoute;