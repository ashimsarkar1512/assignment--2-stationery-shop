import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/stationery/stationery.route';
import { orderRoutes } from './app/modules/orders/order.route';
const app: Application = express();

// parsers

app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
      status: true,
      message: '🚀 Server is up and running smoothly! Ready to handle requests. 🌟',
  });
});


export default app;
