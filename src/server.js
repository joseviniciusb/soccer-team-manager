// src/server.js
const app = require('./app');

const PORT = 3001;

app.listen(3001, () => console.log(`server running on port ${PORT}`));