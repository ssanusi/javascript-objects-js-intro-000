var playlist = {'2face':'African Queen'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];

}
