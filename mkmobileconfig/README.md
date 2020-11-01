mkmobileconfig
==============

Generates and signs a mobileconfig for use with udid.fyi


# loadkeys.sh

Loads the private key, certificate, and certificate chain from Base64 encoded environment variables
* UDID_KEY
* UDID_CERT
* UDID_CHAIN

# mkmobileconfig.js

Generates a mobileconfig from `template.mobileconfig`

Takes the following environment variables

* MK_ORG - Organisation (reverse dns of your URL)
* MK_URL - The URL to submit the enrollment to (e.g. https://udid.fyi/enroll)
* MK_NAME - Display name (your website name)

Outputs to `udid.mobile.config`

# sign.sh

Signs the mobile config.

Expects the source file to be `udid.mobileconfig`, outputs to `stage1.mobileconfig.signed`, and takes the key, cert, and cert chain from `udid.key`, `udid.crt`, and `udidchain.crt` respectively



