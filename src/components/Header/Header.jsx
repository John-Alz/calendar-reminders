import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import RemindersList from '../RemindersList/RemindersList'
import Calendar from '../Calendar/Calendar'
import { useSelector } from 'react-redux'

export default function Header() {

  const {myDate} = useSelector(state => state.reminders)
  console.log(myDate);


  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  let dateDeff;

  if (myDate) {
    const dateArray = myDate.split('/');
      const formattedDate = new Date(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`); 
      dateDeff = formattedDate.toLocaleDateString('en-US', options)
  } else {
    console.log("ERROR");
  }
      



  return (
    <div className='Header'>
    <div className='Header-container'>
    <div className='Header-subctn'>
    <div className='Header-oter'>
    <h2 className='Header-h2'>{dateDeff}</h2>
        <Link to='/create-reminder'>
            <button className='Header-btn'>Add reminder</button>
        </Link>
    </div>
    
    <div>
    <RemindersList/>
    </div>
    </div>
    <div className='Header-calendar'>
    {/* Calendario */}
    <Calendar/>
    </div>
    </div>
    
    </div>
  )
}
