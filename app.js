const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api.routes');

const app = express();

app.use(express.json({ extended: true }));

app.use('/api', apiRoutes);


app.use('/', express.static(path.join(__dirname, 'client', 'my-app', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'my-app', 'build', 'index.html'));
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server has been started on ${PORT} port`));