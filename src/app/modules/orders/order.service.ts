import { Order } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};
const calculateRevenue = async ()=> {
            const pipeline = [
                        {
                          $lookup: {
                            from: 'products',
                            localField: 'product',
                            foreignField: '_id',
                            as: 'productDetails',
                          },
                        },
                        { $unwind: '$productDetails' },
                        {
                          $project: {
                            product: 1,
                            quantity: 1,
                            totalPrice: { $multiply: ['$quantity', '$productDetails.price'] },
                          },
                        },
                        {
                          $group: {
                            _id: null,
                            totalRevenue: { $sum: '$totalPrice' },
                          },
                        },
                      ];
                      
                    
                      const result = await OrderModel.aggregate(pipeline);
                      }

export const OrderServices = {
  createOrderIntoDB,
  calculateRevenue
};
