import React, { useState } from 'react'
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
import './Calendar.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setMyDate } from '../../features/reminders/reminderSlice';
import { v4 as uuidv4 } from 'uuid';

export default function Calendar() {

    const [currMonth, setCurrMonth] = useState(new Date().getMonth());

    let date = new Date();
    let currYear = date.getFullYear();

    const monthsOfYear = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let firstDayMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateMonth = new Date(currYear, currMonth + 1, 0).getDate();
    


    let days = [];

    for (let i = firstDayMonth; i > 0; i--) {
        days.push("")
    }

    for (let i = 1; i <= lastDateMonth; i++) {
        days.push(i);
    }

    //

    const {myDate} = useSelector(state => state.reminders)
    const dispatch = useDispatch();

    console.log(currYear);

    function convertirFecha(fecha) {
        const partes = fecha.split('-');
        const año = partes[0];
        let mes = partes[1]
        let dia = partes[2]

        if (mes.length === 1) {
            mes = "0" + mes;
        } 

        if (dia.length === 1) {
            dia = "0" + dia;
        } 
        
    
        return `${año}-${mes}-${dia}`;
      }
      
    const handleDate = (day) => {
        const dateForSet = `${currYear}-${currMonth + 1}-${day}`
        const convertDate = convertirFecha(dateForSet)
        console.log(convertDate);
        dispatch(setMyDate(convertDate))
      }

    //

    const handlePrev = () => {
        setCurrMonth(currMonth - 1)
    }

    const handleNext= () => {
        setCurrMonth(currMonth + 1)
    }



  return (
    <div className='Calendar'>
    <div className='Calendar-container'>
    <header className='Calendar-header'>
        <p className='Calendar-year'>{currYear}</p>
        <p className='Calendar-month'>{monthsOfYear[currMonth]}</p>
        <div className='Calendar-icons'>
        <span onClick={handlePrev} className='Calendar-iconPrev'><GrPrevious className='Calendar-icon'/></span>
        <span onClick={handleNext} className='Calendar-iconNext'><GrNext/></span>
        </div>
    </header>
    <div className='Calendar-content'>
    <ul className='Calendar-weeks'>
    <li>Sun</li>
    <li>Mon</li>
    <li>Tue</li>
    <li>Wed</li>
    <li>Thu</li>
    <li>Fri</li>
    <li>Sat</li>
    </ul>
    <ul className='Calendar-days'>
    {
        days.map(day => {
            return (
                <li onClick={() => handleDate(day)} key={uuidv4()}>{day}</li>
            )
        })
    }
    </ul>
    </div>
    </div>
    </div>
  )
}
