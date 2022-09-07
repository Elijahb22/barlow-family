import express, { urlencoded, json } from 'express';

const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());