function rippleChange() {
  var content = "<p class='lead'>Thanks! We'll send you more information when we can!</p>";
  $('#rsvp-container').fadeOut('slow', function() {
      $('#rsvp-container').html(content);
      $('#rsvp-container').fadeIn('slow');
  });
}
