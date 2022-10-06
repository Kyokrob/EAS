import React from 'react'
import './formInput.css'

const FormInput = (props) => {
  return (
    <div className='formInput'>
        <label className='formInputLabel'>Username</label>
        <input className='formInputInput' placeholder={props.placeholder} name={props.name}/>
        
    </div>
  )
}

export default FormInput