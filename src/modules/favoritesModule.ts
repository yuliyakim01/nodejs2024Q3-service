import { Module } from '@nestjs/common';
import { FavoritesController } from '../controllers/favoritesController';
import { FavoritesService } from '../services/favoritesService';
import { ArtistsService } from '../services/artistsService';
import { AlbumsService } from '../services/albumsService';
import { TracksService } from '../services/tracksService';

@Module({
  controllers: [FavoritesController],
  providers: [FavoritesService, ArtistsService, AlbumsService, TracksService],
})
export class FavoritesModule {}
