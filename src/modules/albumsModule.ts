import { Module } from '@nestjs/common';
import { AlbumsController } from '../controllers/albumsController';
import { AlbumsService } from '../services/albumsService';

@Module({
  controllers: [AlbumsController],
  providers: [AlbumsService],
})
export class AlbumsModule {}
