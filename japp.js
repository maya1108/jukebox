function jukebox(){
  var sources = ['bensound-cute.mp3','bensound-dubstep.mp3','music_audio.mp3'];
  var current = 1;
  //this.audio = document.getElementById("audio");

  this.playMusic =function() {
    return audio = document.getElementById("audio").play();
},

  this.pauseMusic=function() {
    return audio = document.getElementById("audio").pause();
  },

  this.nextSong=function() {
    var song = document.getElementById("audio");
    song.src = sources[current];
    if (current != sources.length-1){
        current = current +1;
    }else {
      current=0;
    }
    song.load();
    return song.play(),current;
  }

  this.previousSong=function () {
    var song = document.getElementById("audio");
    if(current == 0){
    current = 0;
  }else {
    current = current-1;;
  }
    song.src = sources[current];
    song.load();
    return song.play(), current;
  }

  this.loadSong= function () {
  var  loadedSong = document.getElementById("loadedSong");
  var song = document.getElementById("audio");
song.load();
return song.play();
  }
}
var song = new jukebox();
