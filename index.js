const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.sendFile(path.join(`${__dirname}/public/home.html`))
});

app.get('/*', (req,res)=>{
  res.send('404 NOT FOUND');
});

app.listen(PORT, () => console.log(`Server listening on port : ${PORT}`));