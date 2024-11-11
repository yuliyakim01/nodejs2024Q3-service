export class CreateTrackDto {
    name: string; // Required name of the track
    duration: number; // Required duration of the track in seconds
    artistId?: string | null; // Optional artist ID
    albumId?: string | null; // Optional album ID
  }
  
  export class UpdateTrackDto {
    name?: string; // Optional name for updating
    duration?: number; // Optional duration for updating
    artistId?: string | null; // Optional artist ID for updating
    albumId?: string | null; // Optional album ID for updating
  }
  