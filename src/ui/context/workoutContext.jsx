import React, { useState, createContext } from 'react';

const workoutInput = {
    user: '',
    workoutType: {},
    weightType: '',
    sets: [
        {
            index: 0,
            count: 0,
            weight: 0,
            changeAble: true,
        },
    ],
};

const WorkoutContext = createContext({
    setWorkout: (dataFromUser) => dataFromUser,
    workout: workoutInput,
});

const WorkoutContextProvider = ({ children }) => {
    const [workout, setWorkout] = useState(workoutInput);

    return (
        <WorkoutContext.Provider
            value={{
                workout,
                setWorkout,
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
};

export { WorkoutContextProvider, WorkoutContext };
