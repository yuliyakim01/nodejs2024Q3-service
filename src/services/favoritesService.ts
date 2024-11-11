import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import Favorites from '../models/favorites';
import { ArtistsService } from './artistsService';
import { AlbumsService } from './albumsService';
import { TracksService } from './tracksService';

@Injectable()
export class FavoritesService {
  private favorites: Favorites = new Favorites();

  constructor(
    private readonly artistsService: ArtistsService,
    private readonly albumsService: AlbumsService,
    private readonly tracksService: TracksService,
  ) {}

  // Retrieve all favorites, returning only currently existing entities
  getAll() {
    return {
      artists: this.favorites.artists.filter((artist) => {
        try {
          return !!this.artistsService.findOne(artist.id);
        } catch {
          return false; // Exclude if the artist no longer exists
        }
      }),
      albums: this.favorites.albums.filter((album) => {
        try {
          return !!this.albumsService.findOne(album.id);
        } catch {
          return false; // Exclude if the album no longer exists
        }
      }),
      tracks: this.favorites.tracks.filter((track) => {
        try {
          return !!this.tracksService.findOne(track.id);
        } catch {
          return false; // Exclude if the track no longer exists
        }
      }),
    };
  }

  // Add artist to favorites
  addArtist(artistId: string) {
    const artist = this.artistsService.findOne(artistId);
    if (!artist)
      throw new UnprocessableEntityException(
        `Artist with ID ${artistId} not found`,
      );

    if (
      !this.favorites.artists.some((favArtist) => favArtist.id === artist.id)
    ) {
      this.favorites.artists.push(artist); // Store the full artist object
    }
    return artist;
  }

  // Add album to favorites
  addAlbum(albumId: string) {
    const album = this.albumsService.findOne(albumId);
    if (!album)
      throw new UnprocessableEntityException(
        `Album with ID ${albumId} not found`,
      );

    if (!this.favorites.albums.some((favAlbum) => favAlbum.id === album.id)) {
      this.favorites.albums.push(album); // Store the full album object
    }
    return album;
  }

  // Add track to favorites
  addTrack(trackId: string) {
    const track = this.tracksService.findOne(trackId);
    if (!track)
      throw new UnprocessableEntityException(
        `Track with ID ${trackId} not found`,
      );

    if (!this.favorites.tracks.some((favTrack) => favTrack.id === track.id)) {
      this.favorites.tracks.push(track); // Store the full track object
    }
    return track;
  }

  // Remove artist by ID from favorites
  removeArtist(artistId: string) {
    const index = this.favorites.artists.findIndex(
      (favArtist) => favArtist.id === artistId,
    );
    if (index === -1)
      throw new NotFoundException(
        `Artist with ID ${artistId} not found in favorites`,
      );
    this.favorites.artists.splice(index, 1);
  }

  // Remove album by ID from favorites
  removeAlbum(albumId: string) {
    const index = this.favorites.albums.findIndex(
      (favAlbum) => favAlbum.id === albumId,
    );
    if (index === -1)
      throw new NotFoundException(
        `Album with ID ${albumId} not found in favorites`,
      );
    this.favorites.albums.splice(index, 1);
  }

  // Remove track by ID from favorites
  removeTrack(trackId: string) {
    const index = this.favorites.tracks.findIndex(
      (favTrack) => favTrack.id === trackId,
    );
    if (index === -1)
      throw new NotFoundException(
        `Track with ID ${trackId} not found in favorites`,
      );
    this.favorites.tracks.splice(index, 1);
  }
}
