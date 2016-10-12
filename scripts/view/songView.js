(function(module){

  var lyricsView = {};

  // Handlebars template call
  var songCompiler = Handlebars.compile($('#songs-template').text());

  // an event handler for search input.
  $('#search_now').on('click', function() {
    // call AJAX
    var inputLyrics = $('#search_section input').val();
    inputLyrics = encodeURI(inputLyrics);
    lyrics.request(inputLyrics, lyricsView.renderSongs);
  });

  // this will render the set of Songs using the template.
  lyricsView.renderSongs = function() {
    // only render if we have songs, otherwise display message.
    $('#search_section p').empty();
    if (lyrics.allSongs.length){
      $('#song_display').empty()
      .append(lyrics.allSongs.map(songCompiler));
<<<<<<< HEAD:scripts/view/songView.js
      mixtapeView.addButton();
=======
      getArtistData();
>>>>>>> 8aa19c5d6a168bf40b859345351d0ed90295e0ad:scripts/view/view.js
    } else {
      $('#song_display').text('No songs returned from search. Please try again.');
    };
  };

  module.lyricsView = lyricsView;

})(window);