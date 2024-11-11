import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  HttpCode,
  HttpStatus,
  BadRequestException,
  UnprocessableEntityException,
  NotFoundException,
} from '@nestjs/common';
import { FavoritesService } from '../services/favoritesService';

@Controller('favs')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getAllFavorites() {
    return this.favoritesService.getAll();
  }

  @Post('artist/:id')
  @HttpCode(HttpStatus.CREATED)
  addArtistToFavorites(@Param('id') id: string) {
    if (!this.isValidUUID(id)) {
      throw new BadRequestException('Invalid artist ID format');
    }
    try {
      return this.favoritesService.addArtist(id);
    } catch (error) {
      if (error instanceof NotFoundException)
        throw new UnprocessableEntityException();
      throw error;
    }
  }

  @Post('album/:id')
  @HttpCode(HttpStatus.CREATED)
  addAlbumToFavorites(@Param('id') id: string) {
    if (!this.isValidUUID(id)) {
      throw new BadRequestException('Invalid album ID format');
    }
    try {
      return this.favoritesService.addAlbum(id);
    } catch (error) {
      if (error instanceof NotFoundException)
        throw new UnprocessableEntityException();
      throw error;
    }
  }

  @Post('track/:id')
  @HttpCode(HttpStatus.CREATED)
  addTrackToFavorites(@Param('id') id: string) {
    if (!this.isValidUUID(id)) {
      throw new BadRequestException('Invalid track ID format');
    }
    try {
      return this.favoritesService.addTrack(id);
    } catch (error) {
      if (error instanceof NotFoundException)
        throw new UnprocessableEntityException();
      throw error;
    }
  }

  @Delete('artist/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeArtistFromFavorites(@Param('id') id: string) {
    if (!this.isValidUUID(id)) {
      throw new BadRequestException('Invalid artist ID format');
    }
    try {
      this.favoritesService.removeArtist(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Delete('album/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAlbumFromFavorites(@Param('id') id: string) {
    if (!this.isValidUUID(id)) {
      throw new BadRequestException('Invalid album ID format');
    }
    try {
      this.favoritesService.removeAlbum(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Delete('track/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeTrackFromFavorites(@Param('id') id: string) {
    if (!this.isValidUUID(id)) {
      throw new BadRequestException('Invalid track ID format');
    }
    try {
      this.favoritesService.removeTrack(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  // Helper method to validate UUID format
  private isValidUUID(id: string): boolean {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(id);
  }
}
