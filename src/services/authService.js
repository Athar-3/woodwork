import axios from 'axios'
import jwtDecode from 'jwt-decode'

async function login(credentials) {
    const { data:token } = await axios.post('http://localhost:5000/api/auth', credentials)
    localStorage.setItem('token', token)
    
    // console.log(credentials,token)
}

function getUser() {
    const token = localStorage.getItem('token')
        return jwtDecode(token)
}

async function register(credentials) {
    // console.log('inside register', credentials)
    const { data: token } = await axios.post('http://localhost:5000/api/users', credentials)
    localStorage.setItem("token", token)
    console.log('authServiceRegister',token)
}

function logout() {
    localStorage.removeItem('token')
}

export default {
    login,
    getUser,
    register,
    logout
};