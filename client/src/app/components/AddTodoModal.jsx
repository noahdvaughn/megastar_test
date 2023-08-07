import React, {useState} from 'react'
import {Box, FormControl, TextField, Select, Menu, MenuItem, Button} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MaximizeIcon from '@mui/icons-material/Maximize';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const AddTodoModal = ({item, setData, data, handleModalClose}) => {
  const [newTodo, setNewTodo] = useState({})


    const onChange = (event) => {
        setNewTodo({...newTodo, [event.target.name]: event.target.value})
      }
      const handleSubmit = () => {
        let updatedArray = data
        updatedArray.push(newTodo)
        handleModalClose()
      }

  return (
    <Box sx={{backgroundColor: '#171717', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw',top: '5vh', height: '95vh',  position: 'absolute'}}>

    <MaximizeIcon sx={{ fontSize: '3rem',color: '#2d2f3b', height:'3rem' }}/>


      <Box sx={{display: 'flex', alignItems: 'center', height: '6rem', mb: '1rem', mt: '-2rem'}}> 

      <ArrowBackIcon sx={{fontSize: '2rem', left: '1rem', position: 'absolute'}} onClick={handleModalClose}/>
      
      <h1 className='modalTitle'>Add ToDo</h1>

      </Box>

    <TextField fullWidth name="title"  defaultValue={`New ToDo`} sx={{ color: 'white',  input: {color: 'white'}}} className='input' onChange={onChange}  
       id="filled-hidden-label-normal"
     InputLabelProps={{
          style: { color: 'white' }
        }}    
        />
    
    <FormControl sx={{width: '95vw'}} >

    <Select className='input' onChange={onChange} value={newTodo.userId} name='userId' defaultValue={1}
    IconComponent={(props) => (
      <ExpandMoreIcon {...props}  sx={{fontSize: '3rem', fill: 'white'}}/>
    )}
    inputProps={{
      MenuProps: {
          MenuListProps: {
              sx: {
                  backgroundColor: 'black', color: 'white'
              }
          }
      }
  }}
    >
      <MenuItem value={1}>User 1</MenuItem>
      <MenuItem value={2}>User 2</MenuItem>
      <MenuItem value={3}>User 3</MenuItem>
      <MenuItem value={4}>User 4</MenuItem>
      <MenuItem value={5}>User 5</MenuItem>
    </Select>
    </FormControl>

    <FormControl sx={{width: '95vw'}} >

    <Select className='input' value={newTodo.completed} name='completed' onChange={onChange} defaultValue={false}
    IconComponent={(props) => (
      <ExpandMoreIcon {...props}  sx={{fontSize: '3rem', fill: 'white'}}/>
      )}    
      inputProps={{
        MenuProps: {
            MenuListProps: {
                sx: {
                    backgroundColor: 'black', color: 'white'
                }
            }
        }
    }}
    >
      <MenuItem value={true}>Completed</MenuItem>
      <MenuItem value={false}>Not Completed</MenuItem>
    </Select>
    </FormControl>
   
   <Button onClick={handleSubmit} sx={{backgroundColor: '#77DD77', mt: '2rem'}} className='button'>Finish</Button> 
  
    
    <Button onClick={handleModalClose} className='button' sx={{opacity: '0.5'}}>Quit</Button>
    </Box>
  )
}

export default AddTodoModal