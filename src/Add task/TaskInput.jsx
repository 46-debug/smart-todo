import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from "../TaskSlice";
import { v4 as uuidv4 } from 'uuid'; // Generate unique IDs
import "./taskInput.css";

const TaskInput = () => {
    const dispatch = useDispatch();
    const [taskName, setTaskName] = useState("");
    const [priority, setPriority] = useState("");

    const handleAddTask = () => {
        const newTask = {
            id: uuidv4(),  // Generate unique ID for each task
            taskName,
            priority,
        };

        dispatch(addTask(newTask)); // Dispatch addTask action to Redux store
        setTaskName(""); // Clear input field after adding task
    };

    return (
        <div className="addTask_main">
            <input
                type="text"
                placeholder="Add a new task"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />

            <div className="priority_add_btn">
                <p>Set priority
                    <div className="inpt_div">
                        <label>
                            High
                            <input type="radio" value="High" checked={priority === "High"} onChange={() => setPriority('High')} />
                        </label>
                        <label>
                            Medium
                            <input type="radio" value="Medium" checked={priority === "Medium"} onChange={() => setPriority('Medium')} />
                        </label>
                        <label>
                            Low
                            <input type="radio" value="Low" checked={priority === "Low"} onChange={() => setPriority('Low')} />
                        </label>
                    </div>
                </p>
                <button className='add_task' onClick={handleAddTask}>Add Task</button>
            </div>
        </div>
    );
};

export default TaskInput;
