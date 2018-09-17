require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHnalder = require('./handlers/errorHandler');
const feedRoutes = require('./routes/feedRoute.js');
const authRoutes = require('./routes/authRoute.js');
const waschstrasseRoutes = require('./routes/waschstrasseRoute.js');
const firmaRoutes = require('./routes/firmaRoute.js');
const { loginRequired, ensureCorrectUser } = require('./middleware/auth.js');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/waschstrassen', feedRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/firma/:id', loginRequired, ensureCorrectUser, firmaRoutes);
app.use('/api/firma/:id/waschstrasse', loginRequired, ensureCorrectUser, waschstrasseRoutes);
app.use('/api/firma/:id/waschstrasse/:idwstr', loginRequired, ensureCorrectUser, waschstrasseRoutes);

app.use((req, res, next) => {
  const err = Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHnalder);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
