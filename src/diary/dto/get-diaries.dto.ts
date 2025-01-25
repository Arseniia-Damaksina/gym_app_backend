import { DiariesAPI } from '../interface/diary.interface';
import { CreateDiaryDto } from './create-diaries.dto';

export class GetDiariesDto implements DiariesAPI {
  hasNext: boolean;
  items: Array<CreateDiaryDto>;
}