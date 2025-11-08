const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// MongoDB Verbindung
mongoose.connect('mongodb://localhost:27017/tech-evangelismus', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Verbindung zu MongoDB hergestellt.'))
  .catch(err => console.error('Mongoose-Verbindungsfehler:', err));

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});