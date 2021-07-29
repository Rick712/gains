import axios from 'axios';
import { useState, useCallback } from 'react';

import { MUSCLEGROUPSURL } from '../../variables';
import { transformMuscleGroup } from './../../core/transformers/transform-muscle-group';

export const useMuscleGroups = () => {
    // De context
    const [muscleGroups, setMuscleGroups] = useState(null);
    const [muscleGroupsLoading, setMuscleGroupsLoading] = useState(false);
    const [muscleGroupsErrors, setMuscleGroupsErrors] = useState(null);

    const params = {
        post_status: 'publish',
    };

    const fetchMuscleGroups = useCallback(async () => {
        setMuscleGroupsLoading(true);

        axios
            .get(MUSCLEGROUPSURL, params)
            .then((response) => {
                setMuscleGroups(
                    response.data.map((res) => {
                        return transformMuscleGroup(res);
                    })
                );
            })
            .catch((error) => {
                setMuscleGroupsErrors(error);
            });

        setMuscleGroupsLoading(false);
    }, []);

    return {
        fetchMuscleGroups,
        muscleGroupsErrors,
        muscleGroupsLoading,
        muscleGroups,
    };
};
