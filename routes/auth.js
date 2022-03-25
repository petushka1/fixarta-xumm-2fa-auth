var express = require('express');
var router = express.Router();


router.get('/google/callback', async function (req, res) {
    const code = req.query.code;
    if (code) {
        const {tokens} = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);
        auth = true;
    }
    res.redirect('/');
});

router.get('/logout', (req, res) => {
    oauth2Client.revokeCredentials().then(r => console.log('revoke ', r));
    auth = false;
    res.redirect('/');
});

module.exports = router;
