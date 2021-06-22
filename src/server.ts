import express from 'express';
require('dotenv').config();

const server = express();

server.listen(process.env.SERVER_PORT, () => {
    console.log(`listening @${process.env.SERVER_PORT}`);
});