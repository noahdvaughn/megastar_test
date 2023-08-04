"use client"

import { useState, useEffect } from 'react';
import {Box, TextField, Grid} from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TodoItem from './components/TodoItem'
import Header from './components/Header';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from '@mui/material/Modal';
import AddTodoModal from './components/AddTodoModal';



export default function Home() {

  const [data, setData] = useState([])
  const [viewingCompleted, setViewingCompleted] = useState(false) 
  const [modalOpen, setModalOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [originalData, setOriginalData] = useState([])

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const onChange = (event) => {
    setSearchQuery(event.target.value)
  }
  const searchFilter = () => {
    let filteredArray = []
    console.log(searchQuery)

    for (let i = 0; i < originalData.length; i++){
      if (originalData[i].title.includes(searchQuery)){
        filteredArray.push(originalData[i])
      } 
      if (searchQuery === null){
        filteredArray = originalData
      }
    }
    setData(filteredArray)
    console.log(filteredArray)

  }

useEffect(()=> {
  const grabData = async() => {
    const res = await (await fetch('https://jsonplaceholder.typicode.com/users/1/todos')).json()
    setData(res)
    setOriginalData(res)
  }
  grabData()
}, [])




  return (
    <Box sx={{textAlign: 'center', height: '100vh', overflow: 'hidden'}}>
      <Header setViewingCompleted={setViewingCompleted} viewingComplete={viewingCompleted}/>

      <Box sx={{overflowY: 'scroll'}}>
        <TextField variant='outlined' label="Search Todo's" sx={{background: '#1f222e', width: '90vw', borderRadius: '1rem', marginTop: '1rem', input: {color: 'white'} }}
        onChange={onChange}
        onSubmit={searchFilter}
        InputProps={{
          endAdornment: <InputAdornment><SearchIcon sx={{color: 'white'}}/></InputAdornment>
        }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            searchFilter()
          }
        }}
        />
        {viewingCompleted ? <>
        <Grid sx={{overflow: 'scroll', overflowY: 'scroll', height: '70vh'}}>
        { data.length && data.map((todo)=>{
            if(todo.completed) return (
            <Grid item key={todo.title} >
              <TodoItem item={todo} />
            </Grid>
            )
            })}
        </Grid>
        </> : <>
        <Grid>
          { data.length && data.map((todo)=>{
            if(!todo.completed) return (
            <Grid item key={todo.title}>
              <TodoItem item={todo} setData={setData} data={data}/>
            </Grid>
            )
            })}
        </Grid>
        </>}
        
      </Box>

      <AddCircleIcon sx={{fontSize: '5rem', position: 'fixed', right: 0, bottom: 0, zIndex: 1}} onClick={()=> setModalOpen(true)}/>
      
      <Modal 
      open={modalOpen}
        onClose={()=> setModalOpen(false)}>
          <AddTodoModal data={data} setData={setData} setModalOpen={setModalOpen}/>
      </Modal>
            
    </Box>
  )
}
