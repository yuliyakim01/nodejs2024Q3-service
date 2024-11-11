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

@Module({
  imports: [UsersModule, ArtistsModule, AlbumsModule, TracksModule],
  controllers: [AppController, UsersController, ArtistsController, AlbumsController, TracksController],
  providers: [AppService, UsersService, ArtistsService, AlbumsService, TracksService],
})
export class AppModule {}
