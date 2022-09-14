  $( document ).ready(function() {
      console.log( "document loaded" );
  
  const $tweetText = $('#tweet-text');

  $tweetText.on('keyup', function() {

    const $node = $(this);
    const charsLeft = 140;
    const charsUsed = $node.val().length;
    console.log(charsLeft - charsUsed);



    })
  });