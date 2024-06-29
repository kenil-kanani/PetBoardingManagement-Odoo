import express from 'express';
import cors from 'cors';
import connectToMongo from './src/config/dbConfig.js';
import { PORT } from './src/config/serverConfig.js';

const setUpAndStartServer = async () => {
    try {
        await connectToMongo();

        const app = express();

        app.use(cors());
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        app.listen(PORT, () => {
            console.log(`Server started on PORT : ${PORT}`);
        });

    } catch (error) {
        console.error('Error connecting to database...', error);
        throw error;
    }
};

setUpAndStartServer();