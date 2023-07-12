export type DateType = {
  dateId: string;
  times: TimeType[];
};
export type TimeType = {
  dateId: string;
  timeId: string;
  timeTitle: string;
  client: ClientType | null;
  training: TrainingType | null;
};
export type NewTimeType = {
  timeTitle?: string;
  clientId?: string;
  trainingId?: string;
};
export type ClientType = {
  clientId: string;
  clientName: string;
  photo?: string;
};
export type TrainingType = {
  trainingId: string;
  trainingTitle: string;
  trainingDescription?: string;
  exercises?: ExerciseType[];
};
export type ExerciseType = {
  exerciseId: string;
  exerciseName: string;
  exerciseDescription?: string;
  isDone: ExerciseStatuses;
};
export enum ExerciseStatuses {
  New,
  InProgress,
  Completed,
  Draft,
}
