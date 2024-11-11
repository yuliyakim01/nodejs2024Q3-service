import { Module } from '@nestjs/common';
import { ArtistsController } from '../controllers/artistsController';
import { ArtistsService } from '../services/artistsService';
import { TracksService } from '../services/tracksService';
import { AlbumsService } from '../services/albumsService';

@Module({
  controllers: [ArtistsController],
  providers: [ArtistsService, TracksService, AlbumsService],
})
export class ArtistsModule {}
