import { Request, Response } from 'express';
import { ProductServices } from './stationery.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;

    const result = await ProductServices.createProductIntoDB(productData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  const result = await ProductServices.getAllProductFromDB();
  try {
    res.status(200).json({
      status: true,
      message: 'Products retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleProducts = async (req: Request, res: Response) => {
  try {
    const prroductId = req.params.productId;
    const result = await ProductServices.getSingleProductFromDB(prroductId);
    res.status(200).json({
      status: true,
      message: 'Product retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProducts,
};
