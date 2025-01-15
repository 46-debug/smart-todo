import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from '../TaskSlice';
import "./taskList.css";
import iconDelete from "../assets/delete.svg";

const TaskList = () => {
    const dispatch = useDispatch();
    const taskList = useSelector((state) => state.tasks.taskList); // Get task list from Redux store

    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        const url = `http://api.weatherstack.com/current?access_key=31929f4a544e32946d238110a642b9bf&query=patna`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                setWeather(data); // Set the weather data into state
            } else {
                setError("Error fetching weather data.");
            }
        } catch (err) {
            setError("Error fetching weather data.");
            console.error(err);
        }
    };

    // Fetch weather data on component mount
    useEffect(() => {
        fetchWeather();
    }, []);

    const handleRemoveTask = (id) => {
        dispatch(removeTask(id));
    };

    // Sort tasks based on priority
    const priorityOrder = ["High", "Medium", "Low"]; // Define the priority order
    const sortedTaskList = [...taskList].sort((a, b) => priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority));

    return (
        <div className='tasklist_main'>
            <h3>Task List</h3>
            <ul className='taskList'>
                {sortedTaskList.length > 0 ? (
                    sortedTaskList.map((task) => (
                        <li key={task.id}>
                            {task.taskName} - {task.priority}

                            {/* Conditionally display the temperature for "outdoor" taskName */}
                            {["outdoor", "cricket", "football", "market", "mall", "stadium"].includes(task.taskName) && weather ? (
                                <h5 className='temperature'>Current temperature: {weather.current.temperature}°C</h5>
                            ) : null}

                            <button className='delete_btn' onClick={() => handleRemoveTask(task.id)}>
                                <img src={iconDelete} alt="Delete" />
                            </button>
                        </li>
                    ))
                ) : (
                    <p>No tasks found</p>
                )}
            </ul>
        </div>
    );
};

export default TaskList;
