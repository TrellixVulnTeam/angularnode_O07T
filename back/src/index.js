const express= require('express');
const app = express();
require('dotenv').config();

// GET method route
app.get('/findAllCategory', function (req, res) {
    res.send('GET request to the homepage');
});
app.get('/findAllDevice', function (req, res) {
    res.send('GET request to the homepage');
});
app.get('/findOneDevice', function (req, res) {
    res.send('GET request to the homepage');
});
app.get('/findOneCategory', function (req, res) {
    res.send('GET request to the homepage');
});

// POST method route
app.post('/insertDevice', function (req, res) {
    res.send('POST request to the homepage');
});
app.post('/insertCategory', function (req, res) {
    res.send('POST request to the homepage');
});
app.post('/deleteDevice', function (req, res) {
    res.send('POST request to the homepage');
});
app.post('/deleteCategory', function (req, res) {
    res.send('POST request to the homepage');
});


app.listen(0, () => console.log('Application is running'));

const protocol = process.env.PROTOCOL || "http"
const ip = require('ip').address()
const port = process.env.PORT || 3030

const routes = require('./routes')
app.use(routes)

app.listen(port, () => console.log(`
Server started in http:localhost:${port} or ${protocol}://${ip}:${port}
`))