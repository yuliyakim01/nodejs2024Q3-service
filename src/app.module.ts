import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/usersModule';
import { UsersController } from './controllers/usersController';
import { UsersService } from './services/usersService';
import { ArtistsController } from './controllers/artistsController';
import { ArtistsService } from './services/artistsService';
import { ArtistsModule } from './modules/artistsModule';
import { AlbumsModule } from './modules/albumsModule';
import { TracksModule } from './modules/tracksModule';
import { AlbumsController } from './controllers/albumsController';
import { TracksController } from './controllers/tracksController';
import { AlbumsService } from './services/albumsService';
import { TracksService } from './services/tracksService';
import { FavoritesModule } from './modules/favoritesModule';
import { FavoritesController } from './controllers/favoritesController';
import { FavoritesService } from './services/favoritesService';

@Module({
  imports: [
    UsersModule,
    ArtistsModule,
    AlbumsModule,
    TracksModule,
    FavoritesModule,
  ],
  controllers: [
    AppController,
    UsersController,
    ArtistsController,
    AlbumsController,
    TracksController,
    FavoritesController,
  ],
  providers: [
    AppService,
    UsersService,
    ArtistsService,
    AlbumsService,
    TracksService,
    FavoritesService,
  ],
})
export class AppModule {}
