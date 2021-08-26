import { iWorkout } from '../models/iWorkout';

export function transformCreateWorkout(workout: iWorkout) {
    const mapSets = () => {
        return workout.sets.map((set) => {
            return {
                index: set.index,
                count: set.count,
                weight: set.weight,
            };
        });
    };

    return {
        title: 'Workout',
        status: 'publish',
        fields: {
            workout_type: workout.workoutType.id,
            sets: mapSets(),
        },
    };
}
