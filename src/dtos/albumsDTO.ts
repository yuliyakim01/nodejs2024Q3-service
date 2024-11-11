export class CreateAlbumDto {
    name: string; // Required name of the album
    year: number; // Required release year of the album
    artistId?: string | null; // Optional artist ID associated with the album
  }
  
  export class UpdateAlbumDto {
    name?: string; // Optional name for updating
    year?: number; // Optional release year for updating
    artistId?: string | null; // Optional artist ID for updating
  }
  