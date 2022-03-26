var express = require('express');
var router = express.Router();
const {XummSdk} = require('xumm-sdk');

router.get('/xumm/challenge', function(req, res, next) {
  if (!auth) {
    res.redirect('/');
    return;
  }
  const xummSdk = new XummSdk();

  const request = {
    "TransactionType": "SignIn",
  };
  xummSdk.payload.createAndSubscribe(request, event => {
      // ToDo Add subscription cancellation i believe?
      console.log('New payload event:', event.data)

      if (event.data.signed === true) {
        console.log('The sign request was approved')
        console.log(event.data);
        var uuid = event.data.payload_uuidv4;
        console.log('Requesting details for transaction ', uuid);
        xummSdk.payload.get(uuid, false).then(authPayload => {
          var authWalletId = authPayload.response.account;
          console.log('Authenticated by wallet ', authWalletId);
          walletId = authWalletId;
        })
        return event.data
      }

      if (event.data.signed === false) {
        console.log('The sign request was rejected, clearing authentication')
        auth = false
        res.redirect('/')
        return false
      }
      // ToDo Support auth payload expiration

  }).then(subscription => {
    console.log('Subscription', subscription);
    // all right, we now have QR code for authentication, display it
    res.render('xumm', { title: 'XUMM 2FA Auth', qrCodeUrl: subscription.created.refs.qr_png })
  });

});

router.get('/xumm/status/', function(req, res, next) {
  if (walletId) {
    res.end('{"status": "authenticated"}')
  } else {
    // ToDo Basically, we need to inform on rejection as well
    // ToDo Notify on payload expiration as well
    res.status(400).end('{"status": "NOT authenticated"}')
  }
});

router.get('/google/callback', async function (req, res) {
    const code = req.query.code;
    if (code) {
        const {tokens} = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);
        auth = true;
        res.redirect('/auth/xumm/challenge');
    } else {
      res.redirect('/');
    }
});

router.get('/logout', (req, res) => {
    oauth2Client.revokeCredentials().then(r => console.log('revoke ', r));
    auth = false;
    walletId = undefined;
    res.redirect('/');
});

module.exports = router;
