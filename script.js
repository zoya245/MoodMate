function showSongs(mood) {
    let playlist = document.getElementById('playlist');
    let moodPlaylists = {
      happy: "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC",
      sad: "https://open.spotify.com/playlist/37i9dQZF1DX7qK8ma5wgG1",
      calm: "https://open.spotify.com/playlist/37i9dQZF1DWUZ5bk6qqDSy",
      energetic: "https://open.spotify.com/playlist/37i9dQZF1DX8tZsk68tuDw"
    };
  
    playlist.innerHTML = `<a href="${moodPlaylists[mood]}" target="_blank">Click here to vibe with your ${mood} playlist!</a>`;
  }