import { CreateExercisesDto } from './create-exercises.dto';
import { ExercisesAPI } from '../interface/exercises.interface';

export class GetExercisesDto implements ExercisesAPI {
  hasNext: boolean;
  items: Array<CreateExercisesDto>;
}