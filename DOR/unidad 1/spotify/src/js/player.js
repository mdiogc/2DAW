import Song, { play_song } from "../js/songs.js";

export default class Player {
  constructor(map) {
    Object.entries(map);
    let aux = 1;
    for (var [key, value] of Object.entries(map)) {
      const song = new Song(key, value);
      play_song(song);

      // Crea la instancia para Song
      // Invoca la funcion para reproducir la cancion
      //aux++;
    }
  }
}
