import express from 'express';
import './database/connection';

const app = express();

app.use(express.json())

app.listen(3000);

app.get('/users', (req, res) => {
    console.log('w');
});