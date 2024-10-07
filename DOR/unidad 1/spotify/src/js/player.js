import Song, { play_song } from "../js/songs.js";

export default class Player {
  constructor(map) {
    let aux = 1;

    // Crear una instancia de Song y asociar cada canción con su contenedor
    for (var [key, value] of Object.entries(map)) {
      const s_key = key; // La clave que asocia el item (e.g. ".item-1")
      const s_value = value; // El archivo de la canción
      const s_cover = `.cv${aux}`; // Esto parece ser el selector de la portada del álbum

      const song = new Song(s_key, s_value, s_cover);
      play_song(song); // Llamamos a la función para que la canción se reproduzca al hacer clic
      aux++;
    }
  }
}
