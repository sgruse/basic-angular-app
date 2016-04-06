'use strict';

let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'))

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
