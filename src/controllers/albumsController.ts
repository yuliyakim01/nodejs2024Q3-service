import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus, BadRequestException, NotFoundException } from '@nestjs/common';
import { AlbumsService } from '../services/albumsService';
import { CreateAlbumDto, UpdateAlbumDto } from '../dtos/albumsDTO';

@Controller('album')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.albumsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    if (!this.isValidUUID(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    return this.albumsService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createAlbumDto: CreateAlbumDto) {
    if (!createAlbumDto.name || typeof createAlbumDto.year !== 'number') {
      throw new BadRequestException('Name and year are required');
    }
    return this.albumsService.create(createAlbumDto);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateAlbumDto: UpdateAlbumDto) {
    if (!this.isValidUUID(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    return this.albumsService.update(id, updateAlbumDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    if (!this.isValidUUID(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    this.albumsService.remove(id);
  }

  private isValidUUID(id: string): boolean {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(id);
  }
}
