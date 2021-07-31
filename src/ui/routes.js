import { paths } from './paths';
import {
    SelectMuscleGroup,
    SelectWorkout,
    Settings,
    NotFound,
    SetCounter,
    Login,
} from './views';

export const routes = [
    {
        path: paths.home,
        component: SelectMuscleGroup,
        exact: true,
    },
    {
        path: paths.selectWorkout,
        component: SelectWorkout,
        exact: true,
    },
    {
        path: paths.addSet,
        component: SetCounter,
        exact: true,
    },
    {
        path: paths.settings,
        component: Settings,
        exact: false,
    },
    {
        path: paths.login,
        component: Login,
        exact: false,
    },
    {
        path: '*',
        component: NotFound,
        exact: false,
    },
];
