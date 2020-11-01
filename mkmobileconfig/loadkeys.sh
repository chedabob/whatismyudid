rm udid.key
rm udid.crt
rm udidchain.crt

echo $UDID_KEY | base64 -d > udid.key
echo $UDID_CERT | base64 -d > udid.crt
echo $UDID_CHAIN | base64 -d > udidchain.crt