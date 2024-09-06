
import { Button,Typography } from '@mui/material'
import React ,{useState} from 'react'

const Name = () => {
    const [val,setVal]=useState('anagha')
    const submitHandler=()=>{
        setVal("anagha")
       
        
    }
    const submitHandler1=()=>{
        
        setVal("fidha")

    }
    const submitHandler2=()=>{
        setVal("adhi")
    }
    return(
        <div>

       <Typography variant="h4">welcome {val}</Typography>
        <br></br>
        <Button variant="contained" color="error" onClick={submitHandler}>anagha</Button>
        &nbsp; &nbsp;
        <Button variant="contained" color="error" onClick={submitHandler1}>fidha</Button>
        &nbsp;&nbsp;
        <Button variant="contained" color="error" onClick={submitHandler2}>adhi</Button>
        &nbsp;&nbsp;

        </div>
    )
    }

export default Name