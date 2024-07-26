import React, { useEffect, useState } from 'react'
import Task from './Task'
import './Style.css'

const TodoList = () => {
    const [task, setTask] = useState('')
    const [taskArr, setTaskArr] = useState([])
    const [isEditing, setIsEditing] = useState(null);

    const handleClick = () => {
        if (isEditing !== null) {
            const updatedTasks = taskArr.map((item, idx) => (idx === isEditing ? task : item));
            setTaskArr(updatedTasks);
            setIsEditing(null);
        } else {
            setTaskArr([...taskArr, task]);
        }
        setTask('');
    };

    const handleOnChange = (event) => {
        setTask(event.target.value)
        
        // console.log(event.target.value)
    }

    const handleDelete = (taskToDelete) => {
        setTaskArr(taskArr.filter(task => task !== taskToDelete));
    };

    const handleEdit = (taskToEdit, idx) => {
        setTask(taskToEdit);
        setIsEditing(idx);
    };


    return (
        <div className='container'>
            <h1>To-DO List</h1>
            <div className='input-task'>
                <div className='input-field'>
                    <input type="text" className='input-field-a' placeholder='Enter a Task' onChange={handleOnChange} />
                </div>
                <div className="add-task">
                    <button className='add-task-a' onClick={handleClick}>Add Task</button>
                </div>
            </div>
            {taskArr && taskArr.map((taskItem, idx) => (
                <Task key={idx} task={taskItem} onDelete={handleDelete} onEdit={() => handleEdit(taskItem, idx)}> </Task>
                ))}
        </div>
  )
}

export default TodoList