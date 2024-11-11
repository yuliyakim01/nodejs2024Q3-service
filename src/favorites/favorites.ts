import Artist from '../artist/artist';
import Album from '../album/album';
import Track from '../track/track';


class Favorites {
    artists: Artist[]; // favorite artists ids
    albums: Album[]; // favorite albums ids
    tracks: Track[]; // favorite tracks ids

    constructor() {
      this.artists = [];
      this.albums = [];
      this.tracks = [];
    }
  }

  module.exports = Favorites;