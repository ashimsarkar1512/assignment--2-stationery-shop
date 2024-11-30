import { model, Schema } from 'mongoose';
import { Product } from './stationery.interface';

const productSchema = new Schema<Product>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required.'],
    },
    brand: {
      type: String,
      required: [true, 'Brand name is required.'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required.'],
      min: [0, 'Price must be a positive number.'],
    },
    category: {
      type: String,
      enum: {
        values: [
          'Writing',
          'Office Supplies',
          'Art Supplies',
          'Educational',
          'Technology',
        ],
        message:
          '{VALUE} is not a valid category. Please choose a valid category.',
      },
      required: [true, 'Category is required.'],
    },
    description: {
      type: String,
      required: [true, 'Product description is required.'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required.'],
      min: [0, 'Quantity cannot be less than zero.'],
    },
    inStock: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const ProductModel = model<Product>('Product', productSchema);
