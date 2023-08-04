"use client"

import { useState, useEffect } from 'react';
import {Box, TextField, Grid} from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TodoItem from './components/TodoItem'
import Header from './components/Header';
import AddCircleIcon from '@mui/icons-material/AddCircle';


export default function Home() {

  const [data, setData] = useState([])
  const [viewingCompleted, setViewingCompleted] = useState(false) 


useEffect(()=> {
  const grabData = async() => {
    const res = await (await fetch('https://jsonplaceholder.typicode.com/users/1/todos')).json()
    setData(res)
  }
  grabData()
}, [])




  return (
    <Box sx={{textAlign: 'center'}}>
      <Header setViewingCompleted={setViewingCompleted}/>

      <Box>
        <TextField variant='outlined' label='Search ToDo`s' sx={{background: 'white', text: 'white', width: '90vw', borderRadius: '1rem'}}
        
        InputProps={{
          endAdornment: <InputAdornment><SearchIcon/></InputAdornment>
        }}
        />
        {viewingCompleted ? <>
        <Grid>
        { data.length && data.map((todo)=>{
            if(todo.completed) return (
            <Grid item key={todo.title}>
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

      <AddCircleIcon sx={{fontSize: '5rem', position: 'fixed', right: 0, bottom: 0, zIndex: 1}}/>
            
    </Box>
  )
}
