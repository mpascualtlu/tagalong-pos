const express = require('express');
const app = express();
const cors = require('cors');

const mysql = require('mysql');

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})