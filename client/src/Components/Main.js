import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskList from './TaskList';


const Main = props => {
  
  const [tasks, setTasks] = useState([]);

  useEffect( () => {
    axios.get('http://localhost:8000/api/todos')
      .then(res => setTasks(res.data))
      .catch(err => console.log("cannot get tasks :(", err));
  }, []);

  const setCompleted = i => {
    let temp = [...tasks];
    temp[i].isCompleted = !temp[i].isCompleted;
    setTasks(temp);
    axios.put(`http://localhost:8000/api/todos/${temp[i]._id}`, temp[i])
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  const addToDo = item => {
    setTasks([...tasks, item]);
  }
  
  return (
    <section className="section main">
				<div className="hero is-primary">
					<div className="hero-body is-bold">
						<h1 className="title">Tasks</h1>
					</div>
				</div>
				<div className="box">
          <TaskForm addTask={addToDo} />
          <TaskList todos={tasks} setCompleted={setCompleted} />
				</div>
			</section>
  );
}

export default Main;