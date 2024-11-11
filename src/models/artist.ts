import { v4 as uuidv4 } from 'uuid';

class Artist {
  id: string; // UUID v4
  name: string; // name of the artist
  grammy: boolean; // if the artist has a Grammy

  constructor(name: string) {
    this.id = uuidv4(); // Generates a unique UUID for each artist
    this.name = name; // Sets the name from the constructor argument
    this.grammy = false; // Defaults Grammy status to false
  }
}

export default Artist;
