import React, {
    useState,
    PropsWithChildren,
    createContext,
    Dispatch,
    SetStateAction,
} from 'react';
import { iWorkout } from '../../core/models/WorkoutContext';

const workoutInput = {
    name: '',
    user: '',
    type: '',
    muscleGroup: 0,
    workout: 0,
    weightType: '',
    sets: [
        {
            index: 0,
            weight: 10,
            count: 10,
            changeAble: false,
        },
        {
            index: 1,
            weight: 15,
            count: 10,
            changeAble: false,
        },
        {
            index: 2,
            weight: 20,
            count: 10,
            changeAble: false,
        },
        {
            index: 3,
            weight: 25,
            count: 10,
            changeAble: false,
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
