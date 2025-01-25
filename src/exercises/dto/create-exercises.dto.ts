import { Exercise } from '../interface/exercises.interface';

export class CreateExercisesDto implements Exercise {
  id: string;
  description: string;
}