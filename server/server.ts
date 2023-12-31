import express, {Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const name = process.env.SERVER_NAME;
const port = process.env.SERVER_PORT || 5000; // default to port 5000 if not specified in .env

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Hello World!');
});

app.listen(port, () => {
    console.log(`${name} server running on port:${port}`)
})