import axios from 'axios';
import { useState, useCallback } from 'react';

import { WORKOUTSURL } from '../../variables';
import { transformWorkout } from './../../core/transformers/transform-workout';

export const useWorkouts = (id) => {
    // De context
    const [workouts, setWorkouts] = useState(null);
    const [tempWorkouts, setTempWorkouts] = useState(null);
    const [workoutsLoading, setWorkoutsLoading] = useState(false);
    const [workoutsErrors, setWorkoutsErrors] = useState(null);

    const params = {
        post_status: 'publish',
    };

    const fetchWorkouts = useCallback(async () => {
        setWorkoutsLoading(true);

        let arr = [];

        axios
            .get(WORKOUTSURL, params)
            .then((response) => {
                console.log(response);
                response.data.forEach((res) => {
                    arr.push(transformWorkout(res));
                });
            })
            .then(() => {
                console.log(arr);
                if (!id) {
                    setWorkouts(arr);
                } else {
                    let workoutMatchesId = [];

                    arr.forEach((workout) => {
                        const filteredIds = workout.trained_groups.filter(
                            (group) => group === id
                        );
                        if (filteredIds.length) {
                            workoutMatchesId.push(workout);
                        }
                    });

                    setWorkouts(workoutMatchesId);
                }
            })
            .catch((error) => {
                setWorkoutsErrors(error);
            });

        setWorkoutsLoading(false);
    }, []);

    return {
        fetchWorkouts,
        workoutsErrors,
        workoutsLoading,
        workouts,
    };
};
