import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./TaskSlice";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem("tasks");
        if (serializedState) {
            const parsedState = JSON.parse(serializedState);
            return { taskList: parsedState.taskList || [] }; // Fallback to empty array
        }
    } catch (err) {
        console.error("Could not load state", err);
    }
    return { taskList: [] }; // Always return a valid structure
};


const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state.taskList);
        localStorage.setItem("tasks", serializedState);
    } catch (err) {
        console.error("Could not save state", err);
    }
};

const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
    preloadedState: loadState(), // Correct initialization
});


store.subscribe(() => {
    saveState(store.getState().tasks);
});

export default store;


