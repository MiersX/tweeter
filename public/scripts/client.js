/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$( document ).ready(function() {


  const createTweetElement = function(tweetData) {
   

    // Declare the target and add a class of tweet to maintain css styling

  const $tweet = $(`<article>`).addClass('tweet');

    // Using literals to generate an html markup and integrate user/form data


  
  const htmlMarkup = `
  <header>
    <span class="avatar-and-name">
      <img src=${tweetData.user.avatars} class="user-avatar" alt="The avatar representing ${tweetData.user.handle}">
      ${tweetData.user.name}
    </span>
    <span class="handle">${tweetData.user.handle}</span>
  </header>
  <p>${tweetData.content.text}</p>
  <footer>
    <span>${tweetData.created_at}</span>
    <span class="footIcon">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-crow"></i>
      <i class="fa-solid fa-heart"></i>
    </span>
  </footer>  
  `;

    return $tweet.html(htmlMarkup);
  }

  // Loops through the tweets database and appends each tweet to the tweet-container

  const renderTweets = (tweets) => {
    $('.tweet-container').empty();

    for (const tweet of tweets) {
      $('.tweet-container').append(createTweetElement(tweet))
    }
  }
  
  //renderTweets(data);


  // Bind the submit listener to the tweet-form element -> Prevent default behaviour -> jQuery / ajax post request.
  
  $('.tweet-form').submit(function(event) {
    event.preventDefault();

    $.post('/tweets', $(this).serialize())
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
