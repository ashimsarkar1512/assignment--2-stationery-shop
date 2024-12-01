import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import { ProductServices } from '../stationery/stationery.service';



 const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body; 
    const inexits=await ProductServices.getSingleProductFromDB(orderData?.product)
    console.log(orderData);
            
    // const result = await OrderServices.createOrderIntoDB(orderData);

    res.status(200).json({
      message: 'Order created successfully',
      status: true,
      data: inexits,
    });
  } catch (err: any) {
    res.status(500).json({
      message: err.message,
      status: false,
      err
    });
  }
};
const Revenue = async (req: Request, res: Response) => {
            try {
              const totalRevenue = await OrderServices.calculateRevenue();
              res.status(200).json({
                message: 'Revenue calculated successfully',
                status: true,
                data: { totalRevenue },
              });
            } catch (error: any) {
              res.status(500).json({
                message: 'Server error while calculating revenue',
                status: false,
                error: error.message,
              });
            }
          };
          
export const orderController={
            createOrder,Revenue
            
}