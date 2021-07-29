export function transformWorkout(workout) {
    return {
        id: workout.id,
        name: workout.title.rendered,
        image: workout.acf.image,
        weightType: workout.acf.gewicht_type,
        trained_groups: workout.acf.trained_musclegroups.map((group) => {
            return group.ID;
        }),
    };
}
