import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Todo from './components/Todo'
export default function App() {
  const [tasks,setTasks]=useState([])
  useEffect(()=>{
    getData()
  },[])
  const getData=()=>{
axios
.get('http://localhost:5000/tasks')
.then((response)=>{
 // console.log('RESPONSE: ',response)
  console.log('DATA: ', response.data)
  setTasks(response.data)
})
.catch((err)=>{
  console.log('ERR:',err)
})
  }
  const mapOverTasks=tasks.map((taskObj,i)=> (<Todo key={i}  task={taskObj}/> ))
  
  return (
    <div className='app'>
      <p>app</p>
      <button onClick={getData}>Get TASKS</button>
      {mapOverTasks}
    </div>
  )
}

