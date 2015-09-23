// ==UserScript==
// @name        ASN Bank minimal login
// @namespace   felixakk
// @description Makes the ASN Bank login page pretty
// @include     https://www.asnbank.nl/onlinebankieren/secure/loginparticulier.html
// @version     1
// @grant       none
// ==/UserScript==

$(document.head).append($("<style> \
  div.login-overlay { \
    background-color: #C00; \
    position: absolute; \
    top: 0; \
    bottom: 0; \
    left: 0; \
    right: 0; \
    z-index: 1000; \
    text-align: center; \
  } \
  div.login-overlay div.login-banner { \
    text-align: center; \
    background-color: white; \
  } \
  div.login-overlay img.banner { \
    margin: 8em; \
  } \
  form.login-form { \
    margin: 6em auto; \
    width: 20em; \
    text-align: left; \
    display: block; \
  } \
  form.login-form input.login-username, input.login-password, input[type='submit'] { \
    display: block; \
    width: 100%; \
    border-radius: 0.2em; \
    margin: 1em 0; \
    padding: 1em; \
    border: none; \
    box-sizing: border-box; \
    font-size: 1.2em; \
  } \
  form.login-form input.login-username, input.login-password { \
  } \
  form.login-form input[type='submit'] { \
    color: rgba(255,255,255, 0.8); \
    background-color: rgba(0,0,0, 0.2); \
    box-shadow: 0px 2px rgba(0,0,0, 0.4); \
    font-weight: bold; \
    transition: all 250ms; \
    cursor: pointer; \
  } \
  form.login-form input[type='submit']:hover { \
    color: white; \
    background-color: rgba(255,255,255, 0.1); \
    box-shadow: 0px 6px 12px 0px rgba(0,0,0, 0.4); \
    font-weight: bold; \
  } \
  div.login-overlay button.login-close { \
    background-color: transparent; \
    border: none; \
    padding: 0.4em; \
    position: absolute; \
    top: 0; \
    left: 0; \
    cursor: pointer; \
    font-size: 4em; \
    line-height: 0.7em; \
    color: rgba(0,0,0, 0.5); \
  } \
  </style>"));

$(document.body).append($(" \
  <div class='login-overlay'> \
    <div class='login-banner'> \
      <img class='banner' src='https://www.asnbank.nl/static/asn/images/logo/asnlogo-small.png'></img> \
      <button class='login-close'>×</button> \
    </div> \
    <form class='login-form'> \
      <input type='text' class='login-username' placeholder='Username'/> \
      <input type='password' class='login-password' placeholder='Password'/> \
      <input type='submit' class='login-submit' value='LOGIN'/> \
    </form> \
  </div>" ));

var login = function(e) {
  e.preventDefault();
  var username = $('div.login-overlay input.login-username').val();
  var password = $('div.login-overlay input.login-password').val();
  $('#j_username').val(username);
  $('#j_password').val(password);
  $('#action_sendWithDigicode').click();
};
var close = function(e) {
  $('div.login-overlay').remove();
};
$('div.login-overlay input[type="submit"]').on('click', login);
$('div.login-overlay button.login-close').on('click', close);
