import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../../features/reminders/reminderSlice';
import { Link } from 'react-router-dom';
import './RemindersList.scss'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdOutlineModeEdit } from 'react-icons/md';


export default function RemindersList() {

    const remiders = useSelector(state => state.reminders)
    console.log(remiders);

    

  return (
    <div>
    {remiders.map(remid => (
      
        <div key={remid.id} className='List'>
        
        <div className='List-color'></div>
            <div className='List-container'>
            <h3>{remid.title}</h3>
            <p>{remid.description}</p>
            </div>
            <div className='List-line'></div>
            <div className='List-time'>
            <AiOutlineClockCircle className='List-ticon'/>
            <p>{remid.time}</p>
            </div>
            <Link to={`/edit-reminder/${remid.id}`}>
              <button className='List-btnEdit'><MdOutlineModeEdit color='white'/></button>
            </Link>
            {/* <button onClick={() => handleRemove(remid.id)}>Remove</button> */}
            
        </div>
    ))}
    </div>
  )
}
