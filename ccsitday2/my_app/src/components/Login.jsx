import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <h1 align="center">Login</h1>
        <TextField label="name" variant="outlined"></TextField> <br></br>
        <TextField label="password" variant="outlined" /><TextField/><br></br>
        <Button variant="contained">Login</Button>
      
        </div>
  )
}

export default Login