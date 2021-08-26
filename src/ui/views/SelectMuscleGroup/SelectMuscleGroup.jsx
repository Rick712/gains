import React, { useMemo, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { WorkoutContext } from '../../context/workoutContext';
import { useMuscleGroups } from '../../hooks/use-muscle-groups';
import { paths } from '../../paths';

import { Card, Spinner, Header } from '../../components';

import './select-muscle-group.css';

function SelectMuscleGroup() {
    const { workout, setWorkout } = useContext(WorkoutContext);

    const history = useHistory();

    const handleClick = (id) => {
        setWorkout({ ...workout, muscleGroup: id });
        history.push(paths.selectWorkout);
    };

    const { fetchMuscleGroups, muscleGroups } = useMuscleGroups();

    useMemo(() => {
        fetchMuscleGroups();
    }, [fetchMuscleGroups]);

    return (
        <div>
            <Header />
            <main className="home container">
                <h1>Voeg een training toe</h1>
                <section className="card-container">
                    {muscleGroups === null && <Spinner />}
                    {muscleGroups &&
                        muscleGroups.map((group) => (
                            <Card
                                key={group.id}
                                onClick={() => handleClick(group.id)}
                            >
                                <div>
                                    {group.image && (
                                        <img
                                            src={group.image}
                                            alt={group.name}
                                        />
                                    )}
                                    <h2>{group.name}</h2>
                                </div>
                            </Card>
                        ))}
                </section>
            </main>
        </div>
    );
}

export default SelectMuscleGroup;
