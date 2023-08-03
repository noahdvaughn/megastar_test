"use client"

import { useState, useEffect } from 'react';
import styles from './page.module.css'
import {Box, TextField, Grid} from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TodoItem from './components/TodoItem'
import Header from './components/Header';


export default function Home() {

  const [data, setData] = useState([])
  const [viewingCompleted, setViewingCompleted] = useState(false) 


useEffect(()=> {
  const grabData = async() => {
    const res = await (await fetch('https://jsonplaceholder.typicode.com/users/1/todos')).json()
    setData(res)
    console.log(res)
  }
  grabData()
}, [])
  



  return (
    <Box>
      <Header setViewingCompleted={setViewingCompleted}/>

    <main className={styles.main}>
      <Box>
        <TextField variant='outlined' fullWidth label='Search ToDo`s' sx={{background: 'white', text: 'white'}}
        
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
              <TodoItem item={todo} />
            </Grid>
            )
            })}
        </Grid>
        </>}
        
      </Box>
    </main>
    </Box>
  )
}
