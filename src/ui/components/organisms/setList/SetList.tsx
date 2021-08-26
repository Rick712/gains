import React, { useState, useContext, useEffect, useCallback } from 'react';

import { iWorkout } from '../../../../core/models/iWorkout';

import { WorkoutContext } from '../../../context/workoutContext';
import { SetListRow } from '../..';

import './set-list.css';

const SetList: React.FC = () => {
    const { workout, setWorkout } = useContext(WorkoutContext);
    const [sets, setSets] = useState(workout.sets);

    const handleDeleteSet = useCallback(
        (data: any) => {
            if (workout.sets.length && data.index) {
                const newSet = workout.sets.filter((set) => {
                    return set.index !== data.index;
                });
                const newObj = newSet.map((set, i) => {
                    return {
                        index: i,
                        count: set.count,
                        weight: set.weight,
                        changeAble: false,
                    };
                });
                setWorkout((prev: iWorkout) => ({ ...prev, sets: newObj }));
            }
        },
        [setWorkout, workout]
    );

    const handleUpdateChange = useCallback(
        (index: number) => {
            const newObj = workout.sets;
            newObj[index].changeAble = true;
            setWorkout((prev: iWorkout) => ({ ...prev, sets: newObj }));
        },
        [workout, setWorkout]
    );

    const handleUpdateValue = useCallback(
        (count: string, weight: string, index: number) => {
            if (count === null || weight === null) return;
            let newObj = workout.sets;
            newObj[index] = {
                index: index,
                weight: parseInt(weight, 10),
                count: parseInt(count, 10),
                changeAble: false,
            };
            setWorkout((prev: iWorkout) => ({ ...prev, sets: newObj }));
        },
        [workout, setWorkout]
    );

    useEffect(() => {
        setSets(workout.sets);
    }, [workout]);

    return (
        <div className="set-table">
            <div className="head">
                <div className="row">
                    <div className="cell">Set</div>
                    <div className="cell">Aantal</div>
                    <div className="cell">Gewicht</div>
                    <div className="cell">Pas set aan</div>
                </div>
            </div>
            <div className="body">
                {sets &&
                    sets.map((set, i) => (
                        <SetListRow
                            key={`row-${i}`}
                            data={set}
                            index={i}
                            deleteSet={handleDeleteSet}
                            updateValue={handleUpdateValue}
                            updateChange={handleUpdateChange}
                        />
                    ))}
            </div>
        </div>
    );
};

export default SetList;
