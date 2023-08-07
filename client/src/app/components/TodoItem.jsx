import React, { useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Box, FormControl, Menu, MenuItem, Modal, TextField, Select, Button} from '@mui/material'
import MaximizeIcon from '@mui/icons-material/Maximize';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircleIcon from '@mui/icons-material/Circle';

const TodoItem = ({item, setData, data}) => {
  
  const [anchorEl, setAnchorEl] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [editedTodo, setEditedTodo] = useState({})
  const open = Boolean(anchorEl);
  const [modalClass, setModalClass] = useState('slideUp')

const handleOpenModal = () => {
  setModalOpen(true)
  setEditedTodo(item)
}
const onChange = (event) => {
  setEditedTodo({...editedTodo, [event.target.name]: event.target.value})
}
const handleModalClose = () => {
  setModalClass('slideDown')
 setTimeout(() => {setModalOpen(false), setModalClass('slideUp')}, 300 )
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
    handleModalClose()
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

    <Box className='todoItem' sx={{display: 'flex', justifyContent: 'space-between', m:'1rem', mt: '0', p: '1rem', backgroundColor: '#1f222e', borderRadius: '1rem', alignItems: 'center'}}>
      <Box sx={{display: 'flex', alignItems: 'center'}}>

        {item.completed ? 
        
        <CheckCircleIcon sx={{color: '#77DD77', fontSize: '4rem', paddingRight: '0.5rem'}}/> 
        : 
        <CircleIcon sx={{fontSize: '4rem', fontSize: '4rem', color: '#2b2f3d', paddingRight: '0.5rem'}} className='circle'/>
        }

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
        sx={{cursor: 'pointer', fontSize: '2rem'}}
        />
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        sx={{"& .MuiMenu-paper": 
        { backgroundColor: "black", color: 'white' }}}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
          <MenuItem onClick={()=> handleOpenModal()}>Edit ToDo</MenuItem>
          <MenuItem onClick={()=> handleCompleted(item.id)}>Mark Completed</MenuItem>
        </Menu>

        <Modal
        open={modalOpen}
        onClose={handleModalClose}
        className={modalClass}
        >
          <Box sx={{backgroundColor: '#171717', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw',top: '5vh', height: '95vh', position: 'absolute'}}>

            <MaximizeIcon sx={{fontSize: '3rem', color: '#2d2f3b', height:'3rem' }}/>

            <Box sx={{display: 'flex', alignItems: 'center', height: '6rem', mb: '1rem', mt: '-2rem'}}>
              <ArrowBackIcon sx={{fontSize: '2rem', left: '1rem', position: 'absolute'}} onClick={handleModalClose}/>
              <h1 className='modalTitle'>Edit ToDo</h1>
           </Box>

          <TextField 
          fullWidth name="title" 
          defaultValue={`${item.title}`}
           id="filled-hidden-label-normal" 
           sx={{input: {color: 'white'}}} className='input' onChange={onChange}/>
          
          <FormControl sx={{width: '95vw'}}>

          <Select className='input' onChange={onChange} value={editedTodo.userId} name='userId'
           IconComponent={(props) => (
            <ExpandMoreIcon {...props}  sx={{fontSize: '3rem', fill: 'white'}}/>
          )}
          inputProps={{MenuProps: {MenuListProps: {sx: {backgroundColor: 'black', color: 'white'}}}}}>
            <MenuItem value={1}>User 1</MenuItem>
            <MenuItem value={2}>User 2</MenuItem>
            <MenuItem value={3}>User 3</MenuItem>
            <MenuItem value={4}>User 4</MenuItem>
            <MenuItem value={5}>User 5</MenuItem>
          </Select>
          </FormControl>

          <FormControl sx={{width: '95vw'}} >         
          <Select className='input' value={editedTodo.completed} name='completed' onChange={onChange} 
           IconComponent={(props) => (
            <ExpandMoreIcon {...props}  sx={{fontSize: '3rem', fill: 'white'}}/>
          )}
          inputProps={{MenuProps: {MenuListProps: {sx: {backgroundColor: 'black', color: 'white'}}}}}>
            <MenuItem value={true}>Completed</MenuItem>
            <MenuItem value={false}>Not Completed</MenuItem>
          </Select>
          </FormControl>
         
          <Button sx={{backgroundColor: '#77DD77', mt: '2rem'}} className='button' onClick={()=>handleSubmit(item.id)}>Finish</Button>
          <Button className='button' sx={{opacity: '0.5'}} onClick={handleModalClose}>Quit</Button>
          </Box>
        </Modal>
    </Box>
  )
}

export default TodoItem