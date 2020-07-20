import React, { useState } from 'react';
// import styled, { css } from 'styled-components'
import './index.css'

// class Form extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name : 'Joni',
//       currentName: ''
//     }

//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleChange(event) {
//     this.setState({
//       currentName: event.target.value
//     })
//   }

//   handleSubmit() {
//     this.setState({
//       name: this.state.currentName
//     })
//   }

//   render() {
//     return <div>
//       <h1>Namaku Adalah {this.state.name}</h1>
//       <input type="text" placeholder="Isi Nama Baru" onChange={this.handleChange} />
//       <button onClick={this.handleSubmit}>Ubah</button>
//     </div>
//   }
// }

// const Form = () => {
//   const [name, setName] = useState('Anto')
//   const [currentName, setCurrentName] = useState('')
//   const handleChange = event => {
//     setCurrentName(event.target.value)
//   }
//   const handleSubmit = () =>{
//     setName(currentName)

//   }

//   return <div>
//     <h1>Nama saya adalah {name}</h1>
//     <input type="text" placeholder="Ubah nama baru" onChange={handleChange} />
//     <button onClick={handleSubmit}>Ubah</button>
//   </div>
// }

// const SideBar = () => {
//   return <div className='sidebar-container sidebar-hidden'>
//     <button className='close-sidebar'>X</button>
//     <a href="#">Profile</a>
//     <a href="#">Projects</a>
//     <a href="#">About</a>
//   </div>
// }

// const MainContent = () => {
//   return <div className='main-content'>
//     <h1>Welcome To My Portofolio</h1>
//     <p>Here is my Portofolio</p>
//     <button>See my portofolio</button>
//   </div>
// }

const data = []

const Header = () => {
  return <h1>Aplikasi Taskku</h1>
}

const InfoBar = ({taskNumber}) => {
  return <p>Ada {taskNumber} yang perlu dikerjakan</p>
}


const TaskAdder = ({setTasks, tasks}) => {
  const [currentValue, setCurrentValue] = useState('')

  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      task: currentValue
    }
    setTasks([...tasks, newTask])
    setCurrentValue('')
  }

  return <div> 
    <input type='text' value={currentValue} onChange={event => setCurrentValue(event.target.value)} />
    <button disabled={currentValue === ''} onClick={() => handleAddTask()}>Add Task</button>
  </div>
}

const TaskList = ({tasks, setTasks}) => {
  const handleDelete = (id) => {
    const updatedTask = tasks.filter(task => task.id !== id)
    setTasks(updatedTask)
  }
  return tasks.map(task => {
    return <div className='task-list'>
      <p>{task.task}</p>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  })
}

const TaskApp = () => {
  const [tasks, setTasks] = useState(data)
  const taskId = tasks.map(task => task.id)
  return <div>
    <Header />
    <InfoBar taskNumber={tasks.length}/>
    <TaskAdder setTasks={setTasks} tasks={tasks} />
    <TaskList tasks={tasks} setTasks={setTasks}/>
  </div>
}
const App = () => {

  return <div className='container'>
    <TaskApp />
  </div>
}

export default App