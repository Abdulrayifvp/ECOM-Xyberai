const express = require('express');
const path = require('path');
const app = express();
const supabase = require('./config/supabase');

const userRouter = require('./routes/user.routes');
const adminRouter = require('./routes/admin.routes');
const authRouter = require('./routes/auth.routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/',userRouter)
app.use('/admin',adminRouter)
app.use('/auth',authRouter) 

app.listen(3000, () => {
  console.log('server started on port 3000 : http://localhost:3000/');
});

module.exports = app;