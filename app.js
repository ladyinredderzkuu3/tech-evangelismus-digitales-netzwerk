const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DB_NAME || 'tech-evangelismus';

app.use(cors());
app.use(express.json());

// MongoDB Verbindung
mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Verbindung zu MongoDB hergestellt.'))
  .catch(err => console.error('Mongoose-Verbindungsfehler:', err));

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});