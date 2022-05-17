const express = require('express');
const xml = require("xml");
const https = require('https');
const path = require('path');
const fs = require('fs');

const app = express();

const sslserver = https.createServer({
key: fs.readFileSync(path.join(__dirname, 'cert', 'device-config.com.key')),
cert: fs.readFileSync(path.join(__dirname, 'cert', 'device-config_com.crt'))
}, app)

sslserver.listen(443, () => console.log('Secure server on port 443---'))

app.get('/', (req,res) => {
   const credFile = fs.readFileSync("/home/ubuntu/SampleServer" + '/profile.xml', { encoding: 'utf8' })

   console.log('FILE', credFile, __dirname);
   res.header("Content-Type", "application/xml");
   res.status(200).send(credFile);
  
});


// const port = process.env.PORT || 80;
// app.listen(port, () => console.log(`Server is running on port ${port}...`))