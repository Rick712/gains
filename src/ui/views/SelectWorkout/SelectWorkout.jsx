import React, { useMemo, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { WorkoutContext } from '../../context/workoutContext';
import { useWorkouts } from '../../hooks/use-workouts';
import { paths } from '../../paths';

import { Card, Spinner, Header } from '../../components';

import './select-workout.css';

function SelectWorkout() {
    const { workout, setWorkout } = useContext(WorkoutContext);

    const history = useHistory();

    const handleClick = (workoutType) => {
        setWorkout({
            ...workout,
            workoutType: workoutType,
            weightType: workoutType.weightType,
        });
        history.push(paths.addSet);
    };

    const { fetchWorkouts, workouts } = useWorkouts(
        workout.muscleGroup ? workout.muscleGroup : ''
    );

    useMemo(() => {
        fetchWorkouts();
    }, [fetchWorkouts]);

    return (
        <div>
            <Header />
            <main className="home container">
                <h1>Voeg een training toe</h1>
                <section className="card-container">
                    {workouts === null && <Spinner />}
                    {workouts &&
                        workouts.map((workout) => (
                            <Card
                                key={workout.id}
                                onClick={() => handleClick(workout)}
                            >
                                <div>
                                    <img
                                        src={workout.image}
                                        alt={workout.name}
                                    />
                                    <h2>{workout.name}</h2>
                                </div>
                            </Card>
                        ))}
                    {workouts && !workouts.length && <p>niks gevonden :(</p>}
                </section>
            </main>
        </div>
    );
}

export default SelectWorkout;
