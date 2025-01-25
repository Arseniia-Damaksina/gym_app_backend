import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DiaryModule } from './diary/diary.module';
import { ExercisesModule } from './exercises/exercises.module';

@Module({
  imports: [UsersModule, AuthModule, DiaryModule, ExercisesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
