whatismyudid
============

Node.js app to display the UDID of an iOS device via Mobile Provisioning


Install
=======

1. "npm install" to get dependencies
2. Edit stage1.mobileconfig in sample_mobprov to match your server
     - Specifically, set the enrollment url to '<your server>/enroll' and set PayloadOrganization and PayloadIdentifier
3. (optional, but recommended) Sign stage1.mobileconfig
     openssl smime -sign -in stage1.mobileconfig -out stage1.mobileconfig.signed -signer /path/to/servercert.crt -inkey /path/to/server.key -certfile /path/to/cert/chain.crt -outform der -nodetach
4. Copy stage1.mobileconfig (or rename the signed version) to public
8. Start your server
