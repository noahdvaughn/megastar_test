import React from 'react'
import '../globals.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Box} from '@mui/material'


const Header = ({setViewingCompleted}) => {
  return (
    <Box className='Header'>
        <Box  sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h1>ToDo's</h1>
            <MoreHorizIcon sx={{fontSize: '3rem'}}/>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <h3 className='openButton' onClick={()=> setViewingCompleted(false)}>Open</h3>
            <h3 className='openButton' onClick={()=> setViewingCompleted(true)}>Closed</h3>
        </Box>

    </Box>
  )
}

export default Header