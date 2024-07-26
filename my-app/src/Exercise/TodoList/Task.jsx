import React from 'react'

const Task = ({task, onDelete, onEdit}) => {

    const handleDelete = () => {
        onDelete(task);
    };

  return (
    <div className='task-wala-bada-dibba'>
        <div className="list-of-tasks">
            <div className="left"><p className='para'>{task}</p></div>
            <div className="right">
                <button className='edit' onClick={onEdit}>Edit</button>
                <button className='delete' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Task