import path from 'path';
import fs from 'fs';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import React from 'react';
import User from '../src/User/user';

const app = express();
const PORT =  3333;
// const cors = require('cors')
// app.use(cors())



app.get('/', (req, res) => {
 // const app = ReactDOMServer.renderToString("Hello World");
  const app = ReactDOMServer.renderToString(<User />);
  const indexFile = path.resolve('../build/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
  
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get("/user", (req, res) => {
  res.send("Hello User!");
});

