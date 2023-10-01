import React from 'react'
import img from '../../assets/img-empty.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../../features/reminders/reminderSlice';
import { Link } from 'react-router-dom';
import './RemindersList.scss'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdOutlineModeEdit } from 'react-icons/md';



export default function RemindersList() {

    const dispatch = useDispatch();
    const {remindersListState} = useSelector(state => state.reminders)
    const {remindersListDate} = useSelector(state => state.reminders)
    console.log("este es", remindersListState);
    console.log("este es listDate", remindersListDate);
    

    // const targetDate = "2023-09-28"
    const {myDate} = useSelector(state => state.reminders)

    let reminds = [];
    console.log(reminds);

    if (remindersListState && remindersListState.length) {
      for (let i = 0; i < remindersListState.length; i++) {
        if (myDate === remindersListState[i].date) {
          console.log(myDate);
          // console.log("match", remindersListState[i]);
          reminds.push(remindersListState[i])
          console.log(reminds);
          console.log(remindersListState);
        } else {
          console.log("Esta vacio");
        }
      }
    } else {
      console.error("remindersListState no esta definido");
    }

  return (
    <div className='List'>
    {reminds.length !== 0 ? reminds.map(remid => (

        <div key={remid.id} className='List-main'>

        <div  style={{ borderRadius: '16px', border: `12px solid ${remid.color}` }}></div>
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
    )) : 
    <div className='List-empty'>
      <img src={img}/>
      <h1>No reminders registered so far</h1>
    </div>
    } 
    </div>
  )
}
