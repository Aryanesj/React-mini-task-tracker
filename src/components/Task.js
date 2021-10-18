import React from 'react'
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

const Task = ({ task, onDelete, onToggle }) => {
	return (
		<div className={`task ${task.reminder ? 'reminder' : "" }`} onDoubleClick={() => onToggle(task.id)} >
			<h3>
			{task.text} <FaTimes style={{color: 'teal', cursor: 'pointer'}} onClick={() => onDelete(task.id)} />
			</h3>
			<p>{task.day}</p>
		</div>
	)
}

export default Task