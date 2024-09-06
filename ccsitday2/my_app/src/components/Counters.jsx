
import { Button, Typography } from '@mui/material'
import React,{useState} from 'react'

const Counters = () => {
    var [c,setc]=useState(0)
    const add=()=>{
       
        setc(c+1)
    }
    const sub =()=>{
        
        setc(c-1)
    }
  return (
    <div>
        <br/>
        <Typography variant="h3">Count{c}</Typography>
        <br></br>
        <Button variant="contained" color="sucess" onClick={add}>+</Button>
        &nbsp; &nbsp;
        <Button variant="contained" color="error" onClick={sub}>-</Button>

    </div>
)
}

export default Counters