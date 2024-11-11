import { Module } from '@nestjs/common';
import { AlbumsController } from '../controllers/albumsController';
import { AlbumsService } from '../services/albumsService';
import { TracksService } from '../services/tracksService';

@Module({
  controllers: [AlbumsController],
  providers: [AlbumsService, TracksService],
})
export class AlbumsModule {}
