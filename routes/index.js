var express = require('express');
var router = express.Router();
var { google } = require('googleapis');

redirectUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: ['email', 'profile']
});

/* GET home page. */
router.get('/', function(req, res, next) {
  if (auth) {
    let oauth2 = google.oauth2({version: 'v2', auth: oauth2Client});
    oauth2.userinfo.v2.me.get().then((userInfo =>
      res.render('index',
        {url: '/auth/logout', buttonCaption: 'Sign out', userInfo: userInfo, userWallet: walletId })
    ));
    // ToDo Handle possible reject
  } else {
    res.render('index',
      {url: redirectUrl, buttonCaption: 'Sign in with Google', userInfo: {}, userWallet: undefined });
  }
});

module.exports = router;
