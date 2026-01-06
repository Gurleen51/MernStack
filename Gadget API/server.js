import app from './app.js';
import dotenv from 'dotenv';
import { db } from './utils/db.js';


dotenv.config();

db();


app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
});