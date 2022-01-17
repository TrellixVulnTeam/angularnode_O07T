const express= require('express');
const app = express();
require('dotenv').config();

app.listen(0, () => console.log('Application is running'));

const protocol = process.env.PROTOCOL || "http"
const ip = require('ip').address()
const port = process.env.PORT || 3030

const routes = require('./routes')
app.use(routes)

app.listen(port, () => console.log(`
Server started in http:localhost:${port} or ${protocol}://${ip}:${port}
`))