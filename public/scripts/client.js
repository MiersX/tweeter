/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {

  // Function to escape malicious or accidental code being evaluated.

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


  const createTweetElement = function(tweetData) {
   

    // Declare the target and add a class of tweet to maintain css styling

  const $tweet = $(`<article>`).addClass('tweet');

    // Using literals to generate an html markup and integrate user/form data. Escaped from all instances where users could add script.
  
  const htmlMarkup = `
  <header>
    <span class="avatar-and-name">
      <img src=${escape(tweetData.user.avatars)} class="user-avatar" alt="The avatar representing ${escape(tweetData.user.handle)}">
      ${escape(tweetData.user.name)}
    </span>
    <span class="handle">${escape(tweetData.user.handle)}</span>
  </header>
  <p>${escape(tweetData.content.text)}</p>
  <footer>
    <span>${escape(tweetData.created_at)}</span>
    <span class="footIcon">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-crow"></i>
      <i class="fa-solid fa-heart"></i>
    </span>
  </footer>  
  `;

    return $tweet.html(htmlMarkup);
  }

  // Empty the container to avoid rendering the same tweets again. Loop through the tweets database. Prepends each tweet to the tweet-container

  const renderTweets = (tweets) => {
    $('.tweet-container').empty();

    for (const tweet of tweets) {
      $('.tweet-container').prepend(createTweetElement(tweet))
    }
  }
  
  
  // Bind the submit listener to the tweet-form element -> Prevent default behaviour -> jQuery / ajax POST request.
  
  $('.tweet-form').submit(function(event) {
    event.preventDefault();

    const textField = $(this).find("textarea");
    const $userInput = $(this).find("textarea").val();
    
    // error handle if users tweet is over-limit or non-existant
    if ($userInput.length > 140) {
      alert("The length of your tweet has exceeded the 140 character limit!");
      return;
    }
    if (!$userInput ) {
      alert("You can't submit an empty tweet!");
      return;
    }
    // Sends the form elements as a url-encoded string. 
    // Success callback loads tweets, and resets the text-box and char-counter.
    $.post('/tweets', $(this).serialize(), () => {loadTweets(); textField.val(""); $(".counter").text("140");})
  });

  // Makes an ajax GET request. Calls the renderTweets as a callback on success.

  const loadTweets = function() {
    $.ajax('/tweets', {
      method: 'GET',
      dataType: 'JSON',
      success: (tweets) => renderTweets(tweets),
    });
  };

  
  loadTweets();
  })
