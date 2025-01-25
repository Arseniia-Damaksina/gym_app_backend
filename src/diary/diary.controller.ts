import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { QueryApi, ParamQueryId } from 'src/utils/interfaces/query.interface';
  import { Public } from 'src/auth/public.decorator';
  import { DiaryService } from './diary.service';
  import { GetDiariesDto } from './dto/get-diaries.dto';
  import { CreateDiaryDto } from './dto/create-diaries.dto';
  import { DiariesAPI, Diary } from './interface/diary.interface';
  
  @Controller('diary')
  export class DiaryController {
    constructor(private diaryService: DiaryService) {}
  
    @Get()
    @Public()
    getAll(@Query() query: QueryApi): Observable<DiariesAPI> {
      const { search, filter, page, pageSize } = query;
  
      return this.diaryService.getAll(search || filter, page, pageSize);
    }
  
    @Get(':id')
    @Public()
    getOne(@Param() params: ParamQueryId): Observable<Diary> {
      return this.diaryService.getOne(params['id']);
    }
  
    @Post()
    @Public()
    insert(@Body() newDiary: CreateDiaryDto): Observable<Diary> {
      return this.diaryService.insert(newDiary);
    }
  
    @Put(':id')
    @Public()
    update(
      @Param() params: ParamQueryId,
      @Body() newDiary: CreateDiaryDto,
    ): Observable<Diary> {
      return this.diaryService.update(params['id'], newDiary);
    }
  
    @Delete(':id')
    @Public()
    delete(
      @Param() params: ParamQueryId,
      @Body() newDiary: CreateDiaryDto,
    ): boolean {
      return this.diaryService.delete(params['id']);
    }
  }