var playlist = {'2face':'African Queen'};

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign({}, playlist, { artistName : songTitle});
}

