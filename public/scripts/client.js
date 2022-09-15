/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {


 const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
  }




  const createTweetElement = function(tweetData) {

  const $tweet = $(`<article>`).addClass('tweet');

 
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

  const $tweet = createTweetElement(tweetData)
  console.log($tweet);
  $('.tweet-container').append($tweet);

  

});




/*
          <header>
            <span>
              <i class="fa-solid fa-user-astronaut"></i>
            Name
          </span>
            <span class="handle">@Handle</span>
          </header>
          <p>This is an example tweet: I love banana pancakes</p>
          <footer>
            <span>X Days ago</span>
            <span class="footIcon">
              <i class="fa-solid fa-flag"></i>
              <i class="fa-solid fa-crow"></i>
              <i class="fa-solid fa-heart"></i>
            </span>
          </footer>
*/


