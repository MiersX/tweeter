  $( document ).ready(function() {
      console.log( "document loaded" );
  
  const $tweetText = $('#tweet-text');

  $tweetText.on('input', function() {

    const $node = $(this);
    const charsUsed = 140 - $node.val().length;
    //console.log(charsUsed);
    const $counter = $node.siblings().children('.counter');
    //console.log($counter);
    $counter.text(charsUsed);

    charsUsed < 0 ? $counter.addClass('limit') : $counter.removeClass('limit')
    })
  });