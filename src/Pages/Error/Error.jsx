import React from 'react'

import './Error.css'
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className='error_container'>
      <img className='error_img' src={process.env.PUBLIC_URL+"assets/error.png"} alt="error" />
      <Link to="/" className='error_btn'>Inicio</Link>
    </div>
  )
}

export default Error