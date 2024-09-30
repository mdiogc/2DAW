import songs from "../assets/songs/*.mp3";

Object.keys(songs);

const map = {};

let aux = 1;

for (var key of Object.keys(songs)) {
  //asociar map [`.item-${aux}`] con la cancion songs[key]
  map[".item" + aux++] = songs[key];
}
console.log(map);
// crear un objeto player y pasar el objeto map
