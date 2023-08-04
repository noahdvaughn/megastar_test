import React, { useState } from 'react'
import {Box, FormControl} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';



const TodoItem = ({item, setData, data}) => {
  
  const [anchorEl, setAnchorEl] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [editedTodo, setEditedTodo] = useState({})

  const open = Boolean(anchorEl);

const handleOpenModal = () => {
  setModalOpen(true)
  setEditedTodo(item)
}
const onChange = (event) => {
  setEditedTodo({...editedTodo, [event.target.name]: event.target.value})
  
}
const handleSubmit = (id) => {
  let updatedArray = data
  for (let i=0; i<data.length; i++){
    if (data[i].id === id){
      updatedArray[i] = editedTodo
      setData(updatedArray)
      console.log('data hit')
    }
    setEditedTodo({})
    setModalOpen(false)
  }
}


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCompleted = (id) => {
    let updatedArray = data
    for (let i=0; i<data.length; i++){
      if (data[i].id === id){
        updatedArray[i].completed = true
        setData(updatedArray)
      }
      setAnchorEl(null)
    }
  }
  
  return (

    <Box className='todoItem' sx={{display: 'flex', justifyContent: 'space-between', m:'1rem', p: '1rem', backgroundColor: '#1f222e', borderRadius: '1rem', alignItems: 'center'}}>
        <Box sx={{display: 'flex'}}>
        {item.completed ? <CheckCircleIcon sx={{color: '#77DD77', fontSize: '3rem'}}/> : <RadioButtonUncheckedIcon sx={{fontSize: '3rem'}}/>}
        <Box sx={{textAlign: 'left'}}>
        <h4>{item.title}</h4>
        <h5 className='userLabel'>User : {item.userId}</h5>
        </Box>
        </Box>

        <MoreHorizIcon
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{cursor: 'pointer'}}
        
        />
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}


        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
          <MenuItem onClick={()=> handleOpenModal()}>Edit ToDo</MenuItem>
        <MenuItem onClick={()=> handleCompleted(item.id)}>Mark Completed</MenuItem>
        </Menu>

        <Modal
        open={modalOpen}
        onClose={()=> setModalOpen(false)}
        >
          <Box sx={{backgroundColor: '#171717', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw',top: '5vh', height: '95vh', position: 'absolute'}}>
          <h1 className='modalTitle'>Edit ToDo</h1>

          <TextField fullWidth name="title" label='Title' defaultValue={`${item.title}`} variant="filled" sx={{backgroundColor: '#2d2f3b', width: '95vw', color: 'white', mb: '1rem', input: {color: 'white'}}}  onChange={onChange}/>
          
          <FormControl fullWidth >

          <Select sx={{backgroundColor: 'white', color: 'black'}} label='User Id' onChange={onChange} value={editedTodo.userId} name='userId'
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
          </FormControl>

          <FormControl fullWidth >         
          <Select sx={{backgroundColor: 'white'}} label='User Id'  value={editedTodo.completed} name='completed' onChange={onChange} >
            <MenuItem value={true}>Completed</MenuItem>
            <MenuItem value={false}>Not Completed</MenuItem>
          </Select>
          </FormControl>
         
        
          <Button onClick={()=>handleSubmit(item.id)}>Finish</Button>
          <Button onClick={()=> setModalOpen(false)}>Quit</Button>
          </Box>

        </Modal>

    </Box>
  )
}

export default TodoItem