import { Diary } from '../interface/diary.interface';

export class CreateDiaryDto implements Diary {
  id: string;
  date: Date;
  exercise: string;
  sets: number;
  reps: number;
}