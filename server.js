const express = require('express');
const app = express();

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);
app.use(express.static('public'));
app.use((request, response, next) => {
  response.status(404).send('404 Cannot Find That Page');
});

app.get('/', (request, response) => {
  response.send('hello world');
});

app.get('/json', (request, response) => {
  response.status(200).sendFile('/Users/ngocphan/turing/module4/express-tutorial/public/data.json');
});

app.get('/sunsets', (request, response) => {
  response.status(200).sendFile('/Users/ngocphan/turing/module4/express-tutorial/public/sunsets.html');
});

app.listen(3000, () => {
  console.log('Express intro running on localhost: 3000');
});


