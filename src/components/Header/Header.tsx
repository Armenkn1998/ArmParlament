import React from 'react'
import './HeaderStyle.scss'

import {useNavigate} from 'react-router-dom'

export const Header = () => {
 
  const user = localStorage.getItem('user')
  return (
    <div className='Header'>
        <div className="header_box">
        {!user ? <a href="/">Հետ</a> : <a href="/Admin">Հետ</a>}
            <div className='logo'> 
              <img src="./images/Logo.png" alt="" />
              <h2>Հայաստանի Հանրապետության
              <p>Ազգային Ժողով
              </p></h2>
            </div>

        </div>
       
         

    </div>
  )
}
