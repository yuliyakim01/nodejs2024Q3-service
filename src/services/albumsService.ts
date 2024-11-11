import { Injectable, NotFoundException } from '@nestjs/common';
import Album from '../models/album';
import { CreateAlbumDto, UpdateAlbumDto } from '../dtos/albumsDTO';
// import { TracksService } from '../services/tracksService';

@Injectable()
export class AlbumsService {
  private albums: Album[] = [];

  constructor(
    // private readonly tracksService: TracksService
  ) {}

  findAll(): Album[] {
    return this.albums;
  }

  findOne(id: string): Album {
    const album = this.albums.find((album) => album.id === id);
    if (!album) {
      throw new NotFoundException(`Album with ID ${id} not found`);
    }
    return album;
  }

  create(createAlbumDto: CreateAlbumDto): Album {
    const newAlbum = new Album(
      createAlbumDto.name,
      createAlbumDto.year,
      createAlbumDto.artistId,
    );
    this.albums.push(newAlbum);
    return newAlbum;
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto): Album {
    const album = this.findOne(id);
    if (updateAlbumDto.name) {
      album.name = updateAlbumDto.name;
    }
    if (typeof updateAlbumDto.year === 'number') {
      album.year = updateAlbumDto.year;
    }
    album.artistId = updateAlbumDto.artistId ?? album.artistId;
    return album;
  }

  remove(id: string): void {
    const index = this.albums.findIndex((album) => album.id === id);
    if (index === -1) {
      throw new NotFoundException(`Album with ID ${id} not found`);
    }
    this.albums.splice(index, 1);

    // Cascade delete: set albumId to null in associated tracks
    //this.tracksService.clearAlbumId(id);
  }

  clearArtistId(artistId: string): void {
    this.albums.forEach((album) => {
      if (album.artistId === artistId) {
        album.artistId = null;
      }
    });
  }
}
