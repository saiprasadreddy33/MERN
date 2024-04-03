import React, { useState } from 'react';
import axios from 'axios';


const TaskForm = props => {

  const [task, setTask] = useState("");

  const create = e => {
    e.preventDefault();
    let newTask = {task: task, isCompleted: false};
    axios.post("http://localhost:8000/api/todos", newTask)
      .then(res => {
        console.log(res);
        props.addTask(res.data);
      })
    setTask("");
  }

  return (
    <form onSubmit={ create }>
      <div className="column">
        <div className="level">
          <div className="level-item">
            <p className="subtitle is-4">New Task:</p>
          </div>
          <div className="level-item control has-icons-left">
            <input onChange={e=>setTask(e.target.value)}
              value={task}
              type="text"
              placeholder="Your task"
              className="input"
              autoFocus
            />
            <span className="icon is-small is-left">
              <i className="fas fa-briefcase"></i>
            </span>
          </div>

          <div className="level-item">
            <input type="submit" 
              value="New Task" 
              className="button is-primary"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default TaskForm;