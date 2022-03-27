# fixarta-xumm-2fa-auth

<p>
    <img src="https://user-images.githubusercontent.com/44860643/160254942-b84b91e5-fc46-4e3e-b3ac-d785c1c64f03.png#gh-light-mode-only" width=50%>
    <img src="https://user-images.githubusercontent.com/44860643/160254943-eb76d8f4-15d8-4fcc-b424-6c17c924e55b.png#gh-dark-mode-only" width=50%>
</p>

## User authentification using [XUMM](https://xumm.readme.io/) walet

Fixarta XRPL Marketplace is designed to serve as a decentralized Platform + API for easy and fast integration. XUMM API integration ensures 100% decentralization and provides easy sign-in with your XRPL account.
Marketplace is designed and planned to provide the functionality needed to ensure seamless and trusted interaction between brands, producers, creators, and ultimately a customer.  
Features:
- You have full and exclusive control over your XRPL account and are 100% responsible for managing your account secret
- Account verification
We have chosen to not limit the number of accounts users can use to ensure flexibility and easy usage for customers. Instead of this this, we will provide features to allow sellers to verify their acc through GlobalId service integrated.

\*Additional account data to ensure more credibility and trust to seller account:
- social links
- website
- location
- certificates
- registration number

\*Functionality under consideration

## General purpose of the code in repo as per March 2022

This repo demonstrates the basic example of the 2FA auth using Google + Xumm, implemented in NodeJS using [XUMM-SDK](https://www.npmjs.com/xumm-sdk)
Flow assumes user authenticates with Google account, and as the next steps user confirms identity with XUMM wallet by QR code scanning. As soon as user authenticated, application redirects to the home page where auth token and wallet ID displayed.

### Prerequisites

\*You need to have the Firebase app set up, and URLs added as allowed in the Google API console. App operates on http://localhost:3000 - add this URL. You will need the Google auth client ID and secret.

\*Second is you need XUMM API key and secret, they can be obtained in the XUMM dev console.
As soon as you have these 4, copy .env.sample to .env and put these in place.

\*Ensure you have node version 14 and above.

\*Then run npm install

At this moment, you are good to go if there are no errors displayed

### Run and play with
Invoke DEBUG=xumm-2fa-sample-app:* nodemon start  
As soon as you see in the log something like "xumm-2fa-sample-app:server Listening on port 3000", navigate to http://localhost:3000
Try to authenticate and see what's in log, we tried to add logging which explains what's going on

### Troubleshooting
\* Errors during authentication with Google: ensure you have proper credentials (Authentication client ID and secret), and that you added URL in the Google API console.

### Further plans
Well since this is the very basic start, a lot of stuff needs to be improved.
\*First, app needs proper frontend (and production marketplace surely will have it), and together with this change authentication will become multiuser (at the moment, it is not, since the purpose at this step is to demonstrate the easiness of integration)
\*Second, there are a lot of ToDos in the code
\*At the moment, XUMM auth page implements polling, since request is lightweight and it doesn't look feasible to build socket.io around that, this needs to be thought trough in terms of the better approach maybe.
\*Other ideas/questions/whatever - pls don't hesitate to contact.

# Glory for Ukraine!
