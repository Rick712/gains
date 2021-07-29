import React, { useMemo, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { WorkoutContext } from '../../context/workoutContext';
import { useWorkouts } from '../../hooks/use-workouts';
import { paths } from '../../paths';

import { Card, Spinner } from '../../components';

import './select-workout.css';

function SelectWorkout() {
    const { workout, setWorkout } = useContext(WorkoutContext);

    const history = useHistory();

    const handleClick = (id) => {
        setWorkout({ ...workout, workout: id });
        history.push(paths.addSet);
    };

    const { fetchWorkouts, workouts } = useWorkouts(
        workout.muscleGroup ? workout.muscleGroup : ''
    );

    useMemo(() => {
        fetchWorkouts();
    }, [fetchWorkouts]);

    return (
        <main className="home container">
            <h1>Voeg een training toe</h1>
            <section className="card-container">
                {workouts === null && <Spinner />}
                {workouts &&
                    workouts.map((workout) => (
                        <Card
                            key={workout.id}
                            onClick={() => handleClick(workout.id)}
                        >
                            <div>
                                <img src={workout.image} alt={workout.name} />
                                <h2>{workout.name}</h2>
                            </div>
                        </Card>
                    ))}
                {workouts && !workouts.length && <p>niks gevonden :(</p>}
            </section>
        </main>
    );
}

export default SelectWorkout;
