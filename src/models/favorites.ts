import Artist from './artist';
import Album from './album';
import Track from './track';

class Favorites {
  artists: Artist[]; // Stores full artist objects
  albums: Album[];   // Stores full album objects
  tracks: Track[];   // Stores full track objects

  constructor() {
    this.artists = [];
    this.albums = [];
    this.tracks = [];
  }
}

export default Favorites;
