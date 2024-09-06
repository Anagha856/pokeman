import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h6' component="div" color="black">My App</Typography>&nbsp;&nbsp;&nbsp;
                <Link to='/'>
                <Button variant='contained'color='secondary'> Signup</Button>
                </Link>
                &nbsp;
                <Link to='/login'>
                <Button variant='contained'color='secondary'>Login</Button>
                </Link>
                <Link to='/s'>
                <Button variant='contained'color='secondary'>State</Button>
             
               </Link>
               &nbsp;
               <Link to='/C'>
                <Button variant='contained'color="secondary">Counting</Button>
                </Link>
               &nbsp;
               <Link to='/N'>
                <Button variant='contained'color="secondary">Name</Button>
                </Link>
                <Link to='/F'>
                <Button variant='contained'color="secondary">Apiii</Button>
                </Link>
               &nbsp;
               <Link to='/D'>
                <Button variant='contained'color="secondary">Pokecard</Button>
                </Link>
               &nbsp;
            </Toolbar>

        </AppBar>
        <br/><br/><br/>
    </div>
  )
}

export default Navbar