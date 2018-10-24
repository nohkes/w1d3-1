var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
// access playlist put in var
// create a loop through the next set of keys after playlist
// call our playlist value(p01) - the id - length of track array.
var accessPlaylist = library.playlists
for (let playlistId in accessPlaylist) {
  var currentPlaylists = accessPlaylist[playlistId]
  console.log(currentPlaylists.id + ": " + currentPlaylists.name + " - " + currentPlaylists.tracks.length + " tracks") 

}
}
// printPlaylists()


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {To git@gist.github.com:94aef6161b0e4b4216ac041e72b973ac.git

 
//create a var to access our tracks
// loop through said variable
// create a new variable for tracks i
//console log in the format  id + name + artist + (album)
var accessTracks = library.tracks
for (let tracksId in accessTracks) {
  var currentTracks = accessTracks[tracksId] 
  // console.log(currentTracks.id + ": " + currentTracks.name + " by " + currentTracks.artist + " (" + currentTracks.album + ")" )
}
}
// printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {

var newAccessPlaylist = library.playlists[playlistId];
  // console.log(newAccessPlaylist.id + ": " + newAccessPlaylist.name + " - " + newAccessPlaylist.tracks.length + " tracks") 

var tracksArray = newAccessPlaylist.tracks
tracksArray.forEach(function(element){
  var accessToTracks = library.tracks[element]
    // console.log(accessToTracks.id + ": " + accessToTracks.name + " by " + accessToTracks.artist + " (" + accessToTracks.album + ")" )

});

};

// printPlaylist('p01')


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
//create a path to library.playlistId.tracks
library.playlists[playlistId].tracks.push(trackId);
// console.log(library.playlists[playlistId]);
}
// addTrackToPlaylist('t01', 'p02');

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var inputNewTrack = {
    id: uid(),
    name: name,
    artist: artist,
    album: album 
  }

  library.tracks[inputNewTrack.id] = inputNewTrack;
console.log(library.tracks);
}
addTrack("mee", "you", "why");

// adds a playlist to the library

var addPlaylist = function (name) {
var newPlaylist = {
      id: uid(),
      name: name,
      tracks: ['one', 'two', 'three']
    }
    library.playlists[newPlaylist.id] = newPlaylist;
console.log(library.playlists);
}
addPlaylist("my summer time fun")


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
