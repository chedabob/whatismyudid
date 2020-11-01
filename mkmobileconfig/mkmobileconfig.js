const { v4: uuidv4 } = require('uuid');
var fs = require('fs');

let templateName = "template.mobileconfig"
let outputName = "udid.mobileconfig"

var template = fs.readFileSync(`${__dirname}/${templateName}`, 'utf8');

let uuid = uuidv4();
let organization = process.env.MK_ORG || "com.mattm"
let url = process.env.MK_URL || "https://test.com/test"
let displayName = process.env.MK_NAME || "udid.mattmalone.app"


let replacements = {
  "url": url,
  "organization": organization,
  "displayName": displayName,
  "uuid": uuid
}


for (let [key, value] of Object.entries(replacements)) {
  let fullKey = `{{${key}}}`
  template = template.replace(new RegExp(fullKey, 'g'), value)
}

fs.writeFileSync(`${__dirname}/${outputName}`, template)