import React, { useState, useEffect } from 'react';


const TaskList = props => {

  const [todos, setTodos] = useState([]);
  const [active, setActive] = useState("all");

  const setActiveLink = (e, type) => {
    e.preventDefault();
    type !== undefined ? setActive(type) : type = active;
    switch(type){
      case "completed":
        setTodos(props.todos.filter(t => t.isCompleted));
        break;
      case "active":
        setTodos(props.todos.filter(t => !t.isCompleted));
        break;
      default:
        setTodos(props.todos);
    }
  }

  useEffect( () => {
    setTodos(props.todos);
    // setActiveLink({preventDefault: function(){}});
  }, [props.todos]);

  return (	
    <div>
      <div className="tabs is-centered is-boxed">
        <ul>
          <li className={active==="all" ? "is-active": ""} >
              <a onClick={ e => setActiveLink(e, "all") } href="#!">
                all
            </a>
          </li>
          <li className={active==="completed" ? "is-active": ""} >
            <a onClick={ e => setActiveLink(e, "completed") } href="#!">
              completed
            </a>
          </li>
          <li className={active==="active" ? "is-active": ""} >
            <a onClick={ e => setActiveLink(e, "active") } href="#!">
              active
            </a>
          </li>
        </ul>
      </div>
      <table className="table is-fullwidth is-hoverable is-striped">
        <thead>
          <tr>
            <th>status</th>
            <th>task</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map( (todo, i) => 
              <tr key={ todo._id }>
                <td 
                  className="clickable" 
                  data-id={todo._id} 
                  onClick={ e => props.setCompleted(i) }
                >
                  { 
                    todo.isCompleted ? 
                    <div className="tags has-addons">
                      <span className="tag is-light">
                        <input type="checkbox" defaultChecked />
                      </span>
                      <span className="tag is-success">completed</span>
                    </div> : 
                    <div className="tags has-addons">
                      <span className="tag is-light">
                        <input type="checkbox" />
                      </span>
                      <span className="tag is-danger is-small">active</span>
                    </div> 
                  }
                </td>
                <td>{ todo.task }</td>
            </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;