import axios from 'axios';
import { MUSCLEGROUPSURL } from '../../variables';
import { transformMuscleGroup } from './../transformers/transform-muscle-group';

export const fetchMuscleGroups = () => {
    axios
        .get(MUSCLEGROUPSURL)
        .then((response) => {
            response.data.map((res) => {
                return transformMuscleGroup(res);
            });
        })
        .catch((error) => {
            console.log(error);
        });
};
