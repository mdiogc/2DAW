export default class Song {
  constructor(k_song, v_song, c_song) {
      this.element = document.querySelector(k_song);  // El contenedor del item
      this.audio = new Audio(v_song);  // La canción asociada
      this.album = document.querySelector(c_song);  // La portada del álbum (opcional si la usas)
      this.vinyl = this.element.querySelector('.vinyl');  // El vinilo que debe aparecer
  }
}

export function play_song(song) {
  song.element.onclick = () => {
    if (song.audio.paused) {
      // Mostrar el vinilo con animación
      song.vinyl.classList.add('show');
      song.audio.play();  // Iniciar la reproducción
    } else {
      // Ocultar el vinilo cuando se pausa la canción
      song.vinyl.classList.remove('show');
      song.audio.pause();  // Pausar la reproducción
    }
  }
}
