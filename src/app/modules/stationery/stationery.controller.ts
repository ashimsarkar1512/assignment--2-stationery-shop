import { Request, Response } from 'express';
import { ProductServices } from './stationery.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;

    const result = await ProductServices.createProductIntoDB(productData);

    res.status(200).json({
      message: 'Product created successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Validation failed',
      success: false,

      Error: err,
    });
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
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      Error: err,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    await ProductServices.deleteProductFromDB(productId);

    res.status(200).json({
      status: true,
      message: 'Product deleted successfully',
      data: {},
    });
  } catch (err) {
    res.status(500).json({
      message: 'something went wrong',
      status: true,
      data: err,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProducts,
  deleteProduct,
};
