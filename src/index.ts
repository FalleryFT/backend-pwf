// src/index.ts
import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World! world! world! world! world! world! world! world! world! world! world! world! world! world! world! world! world! world! world! world! world! world! world! world! world! world! world! world! world! world! world! world! world!');
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});