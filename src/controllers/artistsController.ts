import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  BadRequestException,
  NotFoundException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ArtistsService } from '../services/artistsService';
import { CreateArtistDto, UpdateArtistDto } from '../dtos/artistsDTO';

@Controller('artist')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  // Get all artists
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.artistsService.findAll();
  }

  // Get artist by ID
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    if (!this.isValidUUID(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    return this.artistsService.findOne(id);
  }

  // Create a new artist
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createArtistDto: CreateArtistDto) {
    if (!createArtistDto.name || typeof createArtistDto.grammy !== 'boolean') {
      throw new BadRequestException('Name and Grammy status are required');
    }
    return this.artistsService.create(createArtistDto);
  }

  // Update artist information
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateArtistDto: UpdateArtistDto) {
    if (!this.isValidUUID(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    if (
      (updateArtistDto.name && typeof updateArtistDto.name !== 'string') ||
      (updateArtistDto.grammy !== undefined &&
        typeof updateArtistDto.grammy !== 'boolean')
    ) {
      throw new BadRequestException('Invalid update data');
    }
    return this.artistsService.update(id, updateArtistDto);
  }

  // Delete artist by ID
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    if (!this.isValidUUID(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    this.artistsService.remove(id);
  }

  // Helper method to validate UUID
  private isValidUUID(id: string): boolean {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(id);
  }
}
