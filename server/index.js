const express = require('express');
const port = 3200;
const app = express();
app.get('/test', (req, res) => {
 res. send ({ data:
      'Hello from server'});
 });

app.listen(port, () => {
 console.log(`Server running on ${port}`);
 if(process.env.NODE_ENV== "development"){
  console.log('My server is running ' + process.env.NODE_ENV + ' environment');
 }
});
