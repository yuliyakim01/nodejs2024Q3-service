import { Injectable } from '@nestjs/common';
import Track from '../models/track';
import { CreateTrackDto, UpdateTrackDto } from '../dtos/tracksDTO';

@Injectable()
export class TracksService {
  private tracks: Track[] = [];

  // Retrieve all tracks
  findAll(): Track[] {
    return this.tracks;
  }

  // Find a track by ID
  findOne(id: string): Track | undefined {
    return this.tracks.find((track) => track.id === id);
  }

  // Create a new track
  create(createTrackDto: CreateTrackDto): Track {
    const newTrack = new Track(
      createTrackDto.name,
      createTrackDto.duration,
      createTrackDto.artistId,
      createTrackDto.albumId,
    );
    this.tracks.push(newTrack);
    return newTrack;
  }

  // Update an existing track
  update(id: string, updateTrackDto: UpdateTrackDto): Track | undefined {
    const track = this.findOne(id);
    if (track) {
      if (updateTrackDto.name) track.name = updateTrackDto.name;
      if (typeof updateTrackDto.duration === 'number') track.duration = updateTrackDto.duration;
      track.artistId = updateTrackDto.artistId ?? track.artistId;
      track.albumId = updateTrackDto.albumId ?? track.albumId;
    }
    return track;
  }

  // Delete a track by ID
  remove(id: string): void {
    const index = this.tracks.findIndex((track) => track.id === id);
    if (index !== -1) {
      this.tracks.splice(index, 1);
    }
  }

  // Method to clear the artistId of tracks associated with a specific artist
  clearArtistId(artistId: string): void {
    this.tracks.forEach((track) => {
      if (track.artistId === artistId) {
        track.artistId = null;
      }
    });
  }

  // Method to clear the albumId of tracks associated with a specific album
  clearAlbumId(albumId: string): void {
    this.tracks.forEach((track) => {
      if (track.albumId === albumId) {
        track.albumId = null;
      }
    });
  }
}
