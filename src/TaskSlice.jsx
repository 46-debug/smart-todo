import { createSlice } from '@reduxjs/toolkit';

// Function to load tasks from localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem("tasks");
        if (serializedState) {
            const parsedState = JSON.parse(serializedState);
            // Ensure taskList is always an array
            return Array.isArray(parsedState?.taskList) ? parsedState : { taskList: [] };
        }
    } catch (err) {
        console.error("Could not load tasks from localStorage", err);
    }
    return { taskList: [] }; // Default state if nothing is in localStorage
};

const initialState = loadState();

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            // Ensure taskList is an array before using push
            if (Array.isArray(state.taskList)) {
                state.taskList.push(action.payload);
                // Save to localStorage after adding a task
                localStorage.setItem("tasks", JSON.stringify(state));
            }
        },
        removeTask: (state, action) => {
            state.taskList = state.taskList.filter((task) => task.id !== action.payload);
            // Save to localStorage after removing a task
            localStorage.setItem("tasks", JSON.stringify(state));
        },
    },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;

