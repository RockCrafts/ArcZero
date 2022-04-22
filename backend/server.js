require('dotenv').config({});
const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);
const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const fs = require('fs');
const cors = require('cors');
const path = require('path');
app.use(cors());
function recursiveRoutes(folderName) {
  fs.readdirSync(folderName).forEach(function (file) {
    var fullName = path.join(folderName, file);
    var stat = fs.lstatSync(fullName);

    if (stat.isDirectory()) {
      recursiveRoutes(fullName);
    } else if (file.toLowerCase().indexOf('.js')) {
      require('./' + fullName).main(app, base);
      console.log("require('" + fullName + "')");
    }
  });
}
recursiveRoutes('routes'); // Initialize it

app.listen(PORT, () => {
  console.log(`ArcZero API at http://localhost:${PORT}`);
});
