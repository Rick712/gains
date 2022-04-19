import React, { useContext } from 'react';

import { useCreateWorkout } from '../../hooks/use-create-workout';

import { WorkoutContext } from '../../context/workoutContext';
import { SetList, Button, Header } from '../../components';

import './set-counter.css';

function SetCounter() {
    const { workout, setWorkout } = useContext(WorkoutContext);
    const { createWorkout, newWorkoutLoading, newWorkout } = useCreateWorkout();

    const handleAddSet = () => {
        const newSet = workout.sets;
        newSet[newSet.length] = {
            index: newSet[newSet.length],
            weight: 0,
            count: 0,
            changeAble: true,
        };
        setWorkout((prev) => ({ ...prev, sets: newSet }));
    };

    const makeWorkout = () => {
        createWorkout();
    };

    return (
        <div>
            <Header />
            <main className="set-counter container">
                {!newWorkout && !newWorkoutLoading && (
                    <>
                        <h1>Voeg een training toe</h1>
                        {workout.sets && <SetList />}

                        <Button className="add-set">
                            <div onClick={() => handleAddSet()}>
                                Voeg een set toe
                            </div>
                        </Button>

                        <Button className="add-set save-set">
                            <div onClick={makeWorkout}>Maak workout</div>
                        </Button>
                    </>
                )}
                {newWorkout && (
                    <>
                        <h1>Workout opgeslagen!</h1>
                        <p>{newWorkout.date}</p>
                        <p>
                            {newWorkout.acf.workout_type?.post_title ??
                                'Workout'}
                        </p>
                        <div>
                            {newWorkout.acf.sets.map((set) => (
                                <div>
                                    {set.count}x {set.weight}kg
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}

export default SetCounter;
