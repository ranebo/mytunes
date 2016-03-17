// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('remove', function() {
      if (this.length > 0) {
        this.playFirst();        
      }
    });

    this.on('ended', function() {
      this.models[0].dequeue();
    });

    this.on('dequeue', function() {
      this.removeSong();
    });
  },

  removeSong: function() {
    this.shift();
  },

  addSong: function(song) {
    this.push(song);
  },

  playFirst: function() {
    this.models[0].play();
  },



});