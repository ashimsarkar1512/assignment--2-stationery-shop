import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/stationery/stationery.route';
const app: Application = express();

// parsers

app.use(express.json());
app.use(cors());

app.use('/api/v1/products', ProductRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
export default app;
