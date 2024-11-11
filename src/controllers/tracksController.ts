import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus, BadRequestException, NotFoundException } from '@nestjs/common';
import { TracksService } from '../services/tracksService';
import { CreateTrackDto, UpdateTrackDto } from '../dtos/tracksDTO';

@Controller('track')
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.tracksService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    if (!this.isValidUUID(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    return this.tracksService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTrackDto: CreateTrackDto) {
    if (!createTrackDto.name || typeof createTrackDto.duration !== 'number') {
      throw new BadRequestException('Name and duration are required');
    }
    return this.tracksService.create(createTrackDto);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateTrackDto: UpdateTrackDto) {
    if (!this.isValidUUID(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    return this.tracksService.update(id, updateTrackDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    if (!this.isValidUUID(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    this.tracksService.remove(id);
  }

  private isValidUUID(id: string): boolean {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(id);
  }
}
