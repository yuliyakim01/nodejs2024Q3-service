import { v4 as uuidv4 } from 'uuid';

class Track {
    id: string; // uuid v4
    name: string;
    artistId: string | null; // refers to Artist
    albumId: string | null; // refers to Album
    duration: number; // integer number

    constructor(name: string, duration: number, artistId: string | null = null, albumId: string | null = null) {
      this.id = uuidv4();
      this.name = name;
      this.artistId = artistId;
      this.albumId = albumId;
      this.duration = duration;
    }
  }

  export default Track;