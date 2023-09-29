import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import RemindersList from '../RemindersList/RemindersList'

export default function Header() {
  return (
    <div className='Header'>
    <div className='Header-container'>
    <div className='Header-subctn'>
    <div className='Header-oter'>
    <h2 className='Header-h2'>Friday, August 26, 2022</h2>
        <Link to='/create-reminder'>
            <button className='Header-btn'>Add reminder</button>
        </Link>
    </div>
    
    <div>
    <RemindersList/>
    </div>
    </div>
        
    </div>
    
    </div>
  )
}
