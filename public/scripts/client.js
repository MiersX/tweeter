/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

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
    for (const tweet of tweets) {
      $('.tweet-container').append(createTweetElement(tweet))
    }
  }
  
  renderTweets(data);

  // Bind the submit listener to the tweet-form element -> Prevent default behaviour -> jQuery / ajax post request.
  $('.tweet-form').submit(function(event) {
    event.preventDefault();

    $.post('/tweets', $(this).serialize());
  });




});

