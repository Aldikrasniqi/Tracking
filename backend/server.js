const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 2001;
const errorHandler = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const app = express();
const goalRoutes = require('./routes/goalRoutes');

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/goals', goalRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
