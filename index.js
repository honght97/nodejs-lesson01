const express = require('express');
const app = express();
const port = 3000;
app.get('/', (request, response) => {
    response.send('<h1>hello world</h1>');
})
app.get('/users', (request, response) => {
    response.send('User list');
})
app.listen(port, () => {
    console.log('Server listening on port' + port);
});