import React from 'react'
import {Box} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const TodoItem = ({item}) => {
  return (

    <Box>
        {item.completed ? <CheckCircleIcon sx={{color: 'green'}}/> : <RadioButtonUncheckedIcon />}
        <Box>
        <h4>{item.title}</h4>
        <h4>User id: {item.userId}</h4>
        </Box>

    </Box>
  )
}

export default TodoItem