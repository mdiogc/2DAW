import songs from "../assets/songs/*.mp3";
import Player from "../js/player.js";
//Object.keys(songs);

const map = {};

let aux = 1;

for (var key of Object.keys(songs)) {
  //asociar map [`.item-${aux}`] con la cancion songs[key]
  map[`.item-${aux}`] = songs[key];
}

// crear un objeto player y pasar el objeto map

const player = new Player(map);
