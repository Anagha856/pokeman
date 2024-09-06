import { Button, TextField,Typography } from '@mui/material'
import React, {useState}from 'react'

const States = () => {
    var[fname,setFname]=useState()
    var[value,setValue]=useState()
    const takeInput=(e)=>{
       setFname(e.target.value)

    }
    const handleInput = ()=>{
      
      setValue(fname)
    }
    
  return (
    <div>
        <Typography variant='h4'component="div">welcome &nbsp;{value}</Typography>
        <TextField variant='outlined' label='type your name'onChange={takeInput}></TextField><br></br>
        <Button variant='contained'onClick={handleInput}>Confirm</Button>
    
        </div>
  )
}

export default States