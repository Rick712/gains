import axios from 'axios';
import { useState, useCallback, useContext } from 'react';

import { WORKOUTURL } from '../../variables';
import { transformCreateWorkout } from './../../core/transformers/transform-create-workout';

import { UserContext } from '../context/profileContext';
import { WorkoutContext } from '../context/workoutContext';

export const useCreateWorkout = () => {
    // De context
    const { user } = useContext(UserContext);
    const { workout } = useContext(WorkoutContext);

    const [newWorkout, setNewWorkout] = useState(null);
    const [newWorkoutLoading, setNewWorkoutLoading] = useState(false);
    const [workoutError, setNewWorkoutError] = useState(null);

    const data = workout;

    const createWorkout = useCallback(async () => {
        const work = transformCreateWorkout(data);
        console.log(work);
        setNewWorkoutLoading(true);

        console.log(user);

        axios
            .post(WORKOUTURL, work, {
                headers: {
                    authorization: `Bearer ${user.token}`,
                },
            })
            .then((response) => {
                setNewWorkout(response.data);
            })
            .catch((error) => {
                setNewWorkoutError(error);
            });

        setNewWorkoutLoading(false);
    }, [data, user]);

    return {
        createWorkout,
        workoutError,
        newWorkoutLoading,
        newWorkout,
    };
};
