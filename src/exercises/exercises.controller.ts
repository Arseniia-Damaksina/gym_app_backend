import { Controller, Get, Param, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { QueryApi, ParamQueryId } from 'src/utils/interfaces/query.interface';
import { GetExercisesDto } from './dto/get-exercises.dto';
import { ExercisesService } from './exercises.service';
import { Exercise, ExercisesAPI } from './interface/exercises.interface';
import { CreateExercisesDto } from './dto/create-exercises.dto';
import { Public } from 'src/auth/public.decorator';

@Controller('exercises')
export class ExercisesController {
  constructor(private exercisesService: ExercisesService) {}

  @Get()
  @Public()
  getAll(@Query() query: QueryApi): Observable<ExercisesAPI> {
    const { search, filter, page, pageSize } = query;

    return this.exercisesService.getAll(search || filter, page, pageSize);
  }

  @Get(':id')
  @Public()
  getOne(@Param() params: ParamQueryId): Observable<Exercise> {
    return this.exercisesService.getOne(params['id']);
  }
}