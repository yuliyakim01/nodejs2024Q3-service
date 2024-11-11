import { Module } from '@nestjs/common';
import { TracksController } from '../controllers/tracksController';
import { TracksService } from '../services/tracksService';

@Module({
  controllers: [TracksController],
  providers: [TracksService],
})
export class TracksModule {}
