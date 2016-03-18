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
      this.removeFirstSong();
    });

    this.on('removeFromQueue', function(song) {
      this.removeSong(song);
    });

  },

  removeSong: function(song) {
    this.remove(song);
    if (this.length === 0) {
      this.trigger('stop', this);
    }                                    
  },

  removeFirstSong: function() {
    this.models[0].set('count', this.models[0].get('count') + 1);
    this.shift();
  },

  addSong: function(song) {
    this.push(song);
  },

  playFirst: function() {
    if (this.models[0]) {
      this.models[0].play();
    }
  }

});                                                                    