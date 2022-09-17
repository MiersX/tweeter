$( document ).ready(function() {
  console.log("document loaded");
  
  const $tweetText = $('#tweet-text');

 // Attach event handler of input to the textarea id in index.html
  $tweetText.on('input', function() {

  // Find the length of the inputs in the textarea
    const $node = $(this);
    const charsUsed = 140 - $node.val().length;
    // Grab the output element
    const $counter = $node.siblings().children('.counter');
    
    // Set the text in the output element to the characters left
    $counter.text(charsUsed);

    // If the length exceeds the limit, add a css class to style the counter.
    charsUsed < 0 ? $counter.addClass('limit') : $counter.removeClass('limit');
  });
});