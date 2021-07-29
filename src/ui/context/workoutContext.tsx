import React, {
    useState,
    PropsWithChildren,
    createContext,
    Dispatch,
    SetStateAction,
} from 'react';
import { iWorkout } from '../../core/models/WorkoutContext';

interface iContext {
    setWorkout: Dispatch<SetStateAction<iWorkout>>;
    workout: iWorkout;
}

const workoutInput: iWorkout = {
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

const WorkoutContext = createContext<iContext>({
    setWorkout: (dataFromUser: iWorkout) => dataFromUser,
    workout: workoutInput,
});

const WorkoutContextProvider: React.FC<PropsWithChildren<unknown>> = ({
    children,
}) => {
    const [workout, setWorkout] = useState<iWorkout>(workoutInput);

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
