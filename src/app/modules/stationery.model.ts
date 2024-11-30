import { model, Schema } from 'mongoose';
import { Product } from './stationery/stationery.interface';

const productSchema = new Schema<Product>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
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
        message: '{VALUE} is not valid',
      },
      required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean },
  },
  { timestamps: true },
);

export const ProductModel = model<Product>('Product', productSchema);
