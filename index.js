const express = require('express');
const xml = require("xml");
const app = express();

app.get('/', (req,res) => {
    let data = `<?xml version="1.0" encoding="UTF-8"?>`;
    data += `<MgmtTree xmlns="syncml:dmddf1.2">
    <VerDTD>1.2</VerDTD>
    <Node>
      <NodeName>PerProviderSubscription</NodeName>
      <RTProperties>
        <Type>
          <DDFName>urn:wfa:mo:hotspot2dot0-perprovidersubscription:1.0</DDFName>
        </Type>
      </RTProperties>
      <Node>
        <NodeName>i001</NodeName>
        <Node>
          <NodeName>HomeSP</NodeName>
          <Node>
            <NodeName>FriendlyName</NodeName>
            <Value>Purple Passpoint</Value>
          </Node>
          <Node>
            <NodeName>FQDN</NodeName>
            <Value>purplewifi.com</Value>
          </Node>
        </Node>
        <Node>
          <NodeName>Credential</NodeName>
          <Node>
            <NodeName>Realm</NodeName>
            <Value>wlan.mnc888.mcc999.3gppnetwork.org</Value>
          </Node>
          <Node>
            <NodeName>SIM</NodeName>
            <Node>
              <NodeName>IMSI</NodeName>
              <Value>999888*</Value>
            </Node>
            <Node>
              <NodeName>EAPType</NodeName>
              <Value>23</Value>
            </Node>
          </Node>
        </Node>
      </Node>
    </Node>
  </MgmtTree>`;
  res.header("Content-Type", "application/xml");
  res.status(200).send(data);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}...`))