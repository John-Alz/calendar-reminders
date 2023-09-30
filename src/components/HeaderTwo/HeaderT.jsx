import React from 'react'
import RemindersForm from '../RemindersForm/RemindersForm'
import { useSelector } from 'react-redux';
import Calendar from '../Calendar/Calendar';

export default function HeaderT() {


  const {myDate} = useSelector(state => state.reminders)
  console.log(myDate);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  let dateDeff;

  if (myDate) {
    const dateArray = myDate.split('/');
      const formattedDate = new Date(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`);
      // console.log(formattedDate.toLocaleDateString('en-US', options)); 
      dateDeff = formattedDate.toLocaleDateString('en-US', options)
  } else {
    console.log("ERROR");
  }
      

  return (
    <div className='Header'>
    <div className='Header-container'>
    <div className='Header-subctn'>
    <div className='Header-oter'>
    <h2 className='Header-h2'>Add reminder - {dateDeff}</h2>
    </div>
    
    <div>
    <RemindersForm/>
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
