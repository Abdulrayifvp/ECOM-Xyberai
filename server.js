const express = require('express');
const path = require('path');
const app = express();
const supabase = require('./config/supabase');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { title: 'This is TEST PAGE' });
});


app.listen(3000, () => {
  console.log('server started on port 3000 : http://localhost:3000/');
});

module.exports = app;