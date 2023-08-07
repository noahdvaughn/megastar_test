import React from 'react'
import '../globals.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Box} from '@mui/material'


const Header = ({setViewingCompleted, viewingComplete}) => {
  return (
    <Box className='Header'>
        <Box  sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h1 style={{marginLeft: '1rem'}}>ToDo's</h1>
            <MoreHorizIcon sx={{fontSize: '3rem', mr: '1rem'}}/>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>

          <Box  className={viewingComplete ? 'openButton' : 'underline'}>
            <h3  onClick={()=> setViewingCompleted(false)}>Open</h3>
          </Box>

          <Box  className={viewingComplete ? 'underline' : 'openButton'}>
            <h3  onClick={()=> setViewingCompleted(true)}>Closed</h3>
          </Box>
        </Box>

    </Box>
  )
}

export default Header