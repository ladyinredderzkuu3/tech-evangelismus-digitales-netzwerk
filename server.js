const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Tech Evangelism Network! Here, you can explore new technologies, collaborate on projects, and connect with like-minded individuals.');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});