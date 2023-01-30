import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { CatEntity } from './cat/entities/CatEntity';

@Module({ 
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'test.db',
    entities:[CatEntity],
    synchronize: true
  }),CatModule],
  controllers: [AppController],
  providers: [AppService],  
})
export class AppModule {}
 