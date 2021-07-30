import React, { useState, useContext, useCallback, useEffect } from 'react';

import { iWorkout } from '../../../core/models/WorkoutContext';

import { WorkoutContext } from '../../context/workoutContext';
import { SetList, Button } from '../../components';

import './set-counter.css';

function SetCounter() {
    const { workout, setWorkout } = useContext(WorkoutContext);

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

    return (
        <main className="set-counter container">
            <h1>Voeg een training toe</h1>
            {workout.sets && <SetList />}

            <Button className="add-set">
                <div onClick={() => handleAddSet()}>Voeg een set toe</div>
            </Button>
        </main>
    );
}

export default SetCounter;
