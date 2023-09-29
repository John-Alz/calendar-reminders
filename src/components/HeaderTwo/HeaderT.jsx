import React from 'react'
import RemindersForm from '../RemindersForm/RemindersForm'

export default function HeaderT() {
  return (
    <div className='Header'>
    <div className='Header-container'>
    <div className='Header-subctn'>
    <div className='Header-oter'>
    <h2 className='Header-h2'>Add reminder - Friday, August 26, 2022</h2>
    </div>
    
    <div>
    <RemindersForm/>
    </div>
    </div>
        
    </div>
    
    </div>
  )
}
