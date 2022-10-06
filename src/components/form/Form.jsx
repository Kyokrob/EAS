import React, { useState } from 'react'
import './form.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import FormInput from '../formInput/FormInput';
const Form = () => {
/*     const [value, setValue] = React.useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    }; */



    // const [username, setUsername] = useState ('');

    
    console.log("rerendered !")

    const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(e.target)
      console.log(data)
    }

  return (
    <div className='form'>
        <div className="formTitle">
        <h1>Looking for shipping ?</h1>
        <p>Fill in your contact information and your consult experties to contact you back !</p>
        </div>

        <form onSubmit={handleSubmit}>      
        <FormInput placeholder="Username" name="name"/>
        <FormInput placeholder="Line id" name="lineid" />
        <FormInput placeholder="Email"name="email" />
        
        <div className="formInputBtn">
        <button>Submit</button>
        </div>
        </form>

    
        
    {/* <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45%' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          maxRows={2}
          value={value}
          onChange={handleChange}
        />
         <TextField
          id="outlined-multiline-flexible"
          label="Line id"
          multiline
          maxRows={2}
          value={value}
          onChange={handleChange}
        />
    </Box>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '95%' },
      }}
      noValidate
      autoComplete="off"
    >
     <TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={2}
          value={value}
          onChange={handleChange}
        />
         <TextField
          id="outlined-multiline-flexible"
          label="Contact number"
          multiline
          maxRows={2}
          value={value}
          onChange={handleChange}
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Company name"
          multiline
          maxRows={2}
          value={value}
          onChange={handleChange}
        />

        <div className="submitform">
        <div className="submitFormBtn">Submit</div>
        <p className='text01'>OR</p>
        <div className="submitFormBtn">Contact line@</div>
        </div>

    </Box> */}



    </div>
  )
}

export default Form