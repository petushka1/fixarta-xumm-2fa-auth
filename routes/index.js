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
      res.render('index', { title: 'XUMM 2FA Auth', url: '/auth/logout', buttonCaption: 'Sign out', userInfo: userInfo })
    ));
    // ToDo Handle possible reject
  } else {
    res.render('index', { title: 'XUMM 2FA Auth', url: redirectUrl, buttonCaption: 'Sign in with Google', userInfo: {} });
  }
});

module.exports = router;
