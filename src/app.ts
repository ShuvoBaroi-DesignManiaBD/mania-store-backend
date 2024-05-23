import express, { Request, Response } from 'express';
const app = express();

//parsers
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Server is responding');
});

export default app;
