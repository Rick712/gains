export function transformMuscleGroup(group) {
    return {
        id: group.id,
        name: group.title.rendered,
        image: group.acf.image,
    };
}
