import { Injectable, NotFoundException } from '@nestjs/common';
import Artist from '../models/artist';
import { CreateArtistDto, UpdateArtistDto } from '../dtos/artistsDTO';
import { TracksService } from '../services/tracksService';
import { AlbumsService } from '../services/albumsService';

@Injectable()
export class ArtistsService {
  private artists: Artist[] = []; // In-memory array for storing artists

  constructor(
    private readonly tracksService: TracksService,
    private readonly albumsService: AlbumsService,
  ) {}

  // Retrieve all artists
  findAll(): Artist[] {
    return this.artists;
  }

  // Find an artist by ID
  findOne(id: string): Artist {
    const artist = this.artists.find((artist) => artist.id === id);
    if (!artist) {
      throw new NotFoundException(`Artist with ID ${id} not found`);
    }
    return artist;
  }

  // Create a new artist
  create(createArtistDto: CreateArtistDto): Artist {
    const newArtist = new Artist(createArtistDto.name);
    newArtist.grammy = createArtistDto.grammy;
    this.artists.push(newArtist);
    return newArtist;
  }

  // Update an existing artist
  update(id: string, updateArtistDto: UpdateArtistDto): Artist {
    const artist = this.findOne(id); // Will throw if artist not found
    if (updateArtistDto.name) {
      artist.name = updateArtistDto.name;
    }
    if (typeof updateArtistDto.grammy === 'boolean') {
      artist.grammy = updateArtistDto.grammy;
    }
    return artist;
  }

  // Delete an artist by ID with cascading update on dependencies
  remove(id: string): void {
    const index = this.artists.findIndex((artist) => artist.id === id);
    if (index === -1) {
      throw new NotFoundException(`Artist with ID ${id} not found`);
    }
    // Remove artist
    this.artists.splice(index, 1);

    // Cascade delete: set artistId to null in associated tracks and albums
    this.tracksService.clearArtistId(id);
    this.albumsService.clearArtistId(id);
  }
}
