const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("<h1> Hello, Welcome to IIT B Computer Science ");
});


const usersRoute = require('./routes/users');
const productRoute = require('./routes/product');

app.use('./users', usersRoute);
app.use('./product', productRoute);

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
});