import React, {useState} from 'react'
import {Box, FormControl, TextField, Select, Menu, MenuItem, Button} from '@mui/material'


const AddTodoModal = ({item, setData, data, setModalOpen}) => {
  const [newTodo, setNewTodo] = useState({})


    const onChange = (event) => {
        setNewTodo({...newTodo, [event.target.name]: event.target.value})
      }
      const handleSubmit = () => {
        let updatedArray = data
        updatedArray.push(newTodo)
        setModalOpen(false)
      }

  return (
    <Box sx={{backgroundColor: '#171717', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw',top: '5vh', height: '95vh',  position: 'absolute'}}>
    <h1 className='modalTitle'>Add ToDo</h1>

    <TextField fullWidth name="title" label='Title' defaultValue={`Title`} variant="filled" sx={{backgroundColor: '#2d2f3b', width: '95vw', color: 'white', mb: '1rem', input: {color: 'white'}}} onChange={onChange}  
     InputLabelProps={{
          style: { color: 'white' }
        }}
   
          
        
        />
    
    <FormControl sx={{width: '95vw'}} >

    <Select sx={{backgroundColor: '#2d2f3b',mb: '1rem', color: 'white'}} label='User Id' onChange={onChange} value={newTodo.userId} name='userId'
    >
      <MenuItem value={1}>1</MenuItem>
      <MenuItem value={2}>2</MenuItem>
      <MenuItem value={3}>3</MenuItem>
      <MenuItem value={4}>4</MenuItem>
      <MenuItem value={5}>5</MenuItem>
    </Select>
    </FormControl>

    <FormControl sx={{width: '95vw'}} >         
    <Select sx={{backgroundColor: '#2d2f3b',mb: '3rem', color: 'white'}} label='User Id'  value={newTodo.completed} name='completed' onChange={onChange} defaultValue={false} >
      <MenuItem value={true}>Completed</MenuItem>
      <MenuItem value={false}>Not Completed</MenuItem>
    </Select>
    </FormControl>
   
   {newTodo.userId ? (<Button onClick={handleSubmit} sx={{backgroundColor: '#77DD77', color: 'white', width: '40vw'}}>Finish</Button>) : (<Button sx={{backgroundColor: '#77DD77', color: 'white', width: '40vw'}} onClick={()=>{}}>Not allowed</Button>)}
  
    
    <Button onClick={()=> setModalOpen(false)} sx={{color: 'white', width: '40vw'}}>Quit</Button>
    </Box>
  )
}

export default AddTodoModal