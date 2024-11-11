import { Injectable, NotFoundException } from '@nestjs/common';
import Track from '../models/track';
import { CreateTrackDto, UpdateTrackDto } from '../dtos/tracksDTO';

@Injectable()
export class TracksService {
  private tracks: Track[] = [];

  findAll(): Track[] {
    return this.tracks;
  }

  findOne(id: string): Track {
    const track = this.tracks.find((track) => track.id === id);
    if (!track) {
      throw new NotFoundException(`Track with ID ${id} not found`);
    }
    return track;
  }

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

  update(id: string, updateTrackDto: UpdateTrackDto): Track {
    const track = this.findOne(id);
    if (updateTrackDto.name) {
      track.name = updateTrackDto.name;
    }
    if (updateTrackDto.duration) {
      track.duration = updateTrackDto.duration;
    }
    track.artistId = updateTrackDto.artistId ?? track.artistId;
    track.albumId = updateTrackDto.albumId ?? track.albumId;
    return track;
  }

  remove(id: string): void {
    const index = this.tracks.findIndex((track) => track.id === id);
    if (index === -1) {
      throw new NotFoundException(`Track with ID ${id} not found`);
    }
    this.tracks.splice(index, 1);
  }
}
