import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/usersModule';
import { UsersController } from './controllers/usersController';
import { UsersService } from './services/usersService';
import { ArtistsController } from './controllers/artistsController';
import { ArtistsService } from './services/artistsService';
import { ArtistsModule } from './modules/artistsModule';

@Module({
  imports: [UsersModule, ArtistsModule],
  controllers: [AppController, UsersController, ArtistsController],
  providers: [AppService, UsersService, ArtistsService],
})
export class AppModule {}
