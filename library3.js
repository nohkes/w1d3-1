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
             },
  printPlaylists : function () {

var accessPlaylist = this.playlists
for (let playlistId in accessPlaylist) {
  var currentPlaylists = accessPlaylist[playlistId]
  console.log(currentPlaylists.id + ": " + currentPlaylists.name + " - " + currentPlaylists.tracks.length + " tracks") 

  }
},

printTracks : function () {
 
var accessTracks = this.tracks
for (let tracksId in accessTracks) {
  var currentTracks = accessTracks[tracksId] 
  console.log(currentTracks.id + ": " + currentTracks.name + " by " + currentTracks.artist + " (" + currentTracks.album + ")" )
}
},

printPlaylist : function (playlistId) {

var newAccessPlaylist = library.playlists[playlistId];
  console.log(newAccessPlaylist.id + ": " + newAccessPlaylist.name + " - " + newAccessPlaylist.tracks.length + " tracks") 

var tracksArray = newAccessPlaylist.tracks
console.log(tracksArray);
tracksArray.forEach(function(element){
  var accessToTracks = library.tracks[element]
    console.log(accessToTracks.id + ": " + accessToTracks.name + " by " + accessToTracks.artist + " (" + accessToTracks.album + ")" )

})

},

addTrackToPlaylist : function (trackId, playlistId) {
  this.playlists[playlistId].tracks.push(trackId);
  console.log(this.playlists[playlistId]);
  },

uid : function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}, 

addTrack : function (name, artist, album) {
  var inputNewTrack = {
    id: this.uid(),
    name: name,
    artist: artist,
    album: album 
  }

  this.tracks[inputNewTrack.id] = inputNewTrack;
console.log(this.tracks);
},

addPlaylist : function (name) {
var newPlaylist = {
      id: this.uid(),
      name: name,
      tracks: ['one', 'two', 'three']
    }
    this.playlists[newPlaylist.id] = newPlaylist;
console.log(this.playlists);
}

}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


library.printPlaylists()
library.printTracks();
library.printPlaylist('p01')
library.addTrackToPlaylist('t01', 'p02');
library.addTrack("mee", "you", "why");
library.addPlaylist("my summer time fun")



// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)




// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)





// adds an existing track to an existing playlist




// generates a unique id
// (use this for addTrack and addPlaylist)




// adds a track to the library




// adds a playlist to the library





// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
