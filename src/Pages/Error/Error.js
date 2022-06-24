import React from 'react'

import './Error.css'
import errImg from '../../images/error.png';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className='error_container'>
      <img className='error_img' src={errImg} alt="error" />
      <Link to="/" className='error_btn'>Inicio</Link>
    </div>
  )
}

export default Error