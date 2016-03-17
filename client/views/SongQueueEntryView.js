// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'enqueue': function() {
      this.model.render();
      // this.model.enqueue();
    }

  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  },

});