import React from 'react'
import './Login.css'
import logo from '../../images/logo.png'

function Login() {
  return (
    <div className='login_container'>
        <div className='login_left'>
            <div className='login_left_logo'>
                <img src={logo} alt='logo'/>
                <h3>Ludotecapp</h3>
            </div>
        </div>

        <div className='login_right'>
            
        </div>
    </div>
  )
}

export default Login