export interface iWorkout {
    name: string;
    user: string;
    type: string;
    muscleGroup: number;
    workoutType: any;
    weightType: string;
    sets: iSet[];
}

export interface iSet {
    index: number;
    weight: number;
    count: number;
    changeAble: boolean;
}
