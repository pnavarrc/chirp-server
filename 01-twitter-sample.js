// Twitter Sample
//
// Using the Twitter Streaming API. In this example, we retrieve the
// sample of the statuses in real time.

// Import node modules
var Twit   = require('twit'),           // Twitter API Client
    config = require('./config.json');  // Twitter Credentials

// Configure the Twit object with the application credentials
var T = new Twit(config);

// Subscribe to the stream sample, for tweets in english
var stream = T.stream('statuses/sample');

// The callback will be invoked on each tweet. Here, we print the username
// and the text of the tweet in the screen.
stream.on('tweet', function(tweet) {
    console.log('[@' + tweet.user.screen_name + ']: ' + tweet.text);
});

// The 'connect' callback is invoked when the Twitter API Client
// tries to connect to Twitter.
stream.on('connect', function(msg) {
    console.log('connect');
});

// The 'connected' event is triggered when the connection is successful.
stream.on('connected', function(msg) {
    console.log('connected');
});

// The 'warning' event is triggered if the client is not processing the
// tweets fast enough.
stream.on('warning', function(msg) {
    console.warning('warning')
});

// The 'disconnect' event is triggered when a disconnect message comes from
// Twitter.
stream.on('disconnect', function(msg) {
    console.log('disconnect');
});