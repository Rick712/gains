import React, { useState, useContext, useEffect, useCallback } from 'react';

import { WorkoutContext } from '../../../context/workoutContext';
import { SetListRow } from '../..';

import './set-list.css';

const SetList: React.FC = () => {
    const { workout, setWorkout } = useContext(WorkoutContext);
    const [sets, setSets] = useState(workout.sets);

    const handleDeleteSet = (data: any) => {
        const newObj = workout;
        const newSet = newObj.sets.filter((set) => {
            console.log(set.index, data.index);
            return set.index !== data.index;
        });

        const applyNewIndex = newSet.map((set, i) => {
            return {
                index: i,
                count: set.count,
                weight: set.weight,
                changeAble: false,
            };
        });

        setSets(applyNewIndex);
    };

    const handleUpdateChange = useCallback(
        (index: number) => {
            const newObj = workout;
            newObj.sets[index].changeAble = true;
            setWorkout(newObj);
        },
        [workout, setWorkout]
    );

    const handleUpdateValue = useCallback(
        (count: string, weight: string, index: number) => {
            if (count === null || weight === null) return;
            let newObj = workout;
            newObj.sets[index] = {
                index: index,
                weight: parseInt(weight, 10),
                count: parseInt(count, 10),
                changeAble: false,
            };
            setWorkout(newObj);
        },
        [workout, setWorkout]
    );

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
