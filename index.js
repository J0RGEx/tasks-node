const express =  require('express');
const bodyParser = require('body-parser');
const path = require('path');

const routes =  require('./routes');
const db = require('./config/db');
const cargarProyectos = require('./middlewares/cargarProyectos');

// Import models

require('./models/Proyecto');
require('./models/Tarea');

db.sync()
    .then(() => console.log('Connected to server'))
    .catch((err) => console.log(err))

const app = express();
// Load projects

app.use(cargarProyectos);

app.use(bodyParser.urlencoded({ extended: true }))
// Enable Pug
app.set('view engine', 'pug');

// Add views folder 
app.set('views', path.join(__dirname, './views'));

// Add static folder
app.use(express.static('public'));

app.use('/', routes());


app.listen(3000, () => {
    console.log('Server is Alive');
});