#### 🖊️ Stationery Shop API

Effortlessly manage your stationery shop with this powerful REST API, built with Express.js, TypeScript, and MongoDB.

---

## ✨ Features

### 🎨 Product Management
- Add, view, update, or remove products from your inventory.
- Search products by name, brand, or category.
- Monitor stock levels to ensure efficient inventory control.

### 🛒 Order Processing
- Seamlessly place orders while updating inventory in real time.
- Auto-calculate total prices based on quantity.
- Avoid ordering out-of-stock products.

### 📊 Revenue Insights
- Aggregate total revenue using advanced MongoDB pipelines.
- Gain actionable insights into your sales data.

---

### 💻 Tech Stack

- **Node.js** & **Express.js** for the server.
- **TypeScript** for a robust type system.
- **MongoDB** & **Mongoose** for database management.
- **CORS** for secure cross-origin access.
- **Dotenv** for environment configuration.

---

### 🗂️ Folder Structure

```plaintext
src/
├── app
│   ├── config/
│   │   └── index.ts
│   ├── modules/
│   │   ├── orders/
│   │   │   ├── order-controller.ts
│   │   │   ├── order-interface.ts
│   │   │   ├── order-model.ts
│   │   │   ├── order-route.ts
│   │   │   ├── order-service.ts
│   │   │   └── order-validation.ts
│   │   ├── products/
│   │   │   ├── product-controller.ts
│   │   │   ├── product-interface.ts
│   │   │   ├── product-model.ts
│   │   │   ├── product-route.ts
│   │   │   ├── product-service.ts
│   │   │   └── product-validation.ts
├── app.ts
├── server.ts

```
###🚦 API Endpoints




## Products
POST   /api/products          # Create a product
GET    /api/products          # Get all products
GET    /api/products/:id      # Get product by ID
PUT    /api/products/:id      # Update product
DELETE /api/products/:id      # Delete product

## Orders
### Endpoints
- **POST** `/api/orders` - Create an order.
- **GET** `/api/orders/revenue` - Get total revenue.

---

## 🛠️ Setup & Installation
### Clone the repository
```
git clone <repository-url>
cd stationery-shop-api
```
## Environment Setup
```
Create a .env file in the root directory with the following content:
```

## 2.Install dependencies
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/stationery-shop
NODE_ENV=development
```

## Start the Server
```
#Development

npm run start:dev
```

# Production
```
npm run build
npm start
```

### 📝 API Documentation
## Create Product
```
POST /api/products
Headers:
Content-Type: application/json
```

### Body:
```
{
  "name": "Notebook",
  "brand": "Moleskine",
  "price": 15,
  "category": "Office Supplies",
  "description": "A high-quality notebook for professionals.",
  "quantity": 200
}
```


## Place Order
```
POST /api/orders
Headers:

Content-Type: application/json
```

### Body:
```
{
  "email": "customer@example.com",
  "product": "product_id_here",
  "quantity": 2
}

```

###🔒 Error Handling

- The API implements comprehensive error handling mechanisms:

- Validation errors (400): Incorrect or missing input.
- Not found errors (404): Resource not found.
- Server errors (500): Internal server issues.
- Custom error messages: Context-specific errors.

## Example error response:
```

{
  "message": "Validation failed",
  "success": false,
  "error": "ValidationError",
  "stack": "..." // Visible only in development
}
```


### 🧪 Data Validation
- Order validation with business rules.
- Input sanitization and type checking.

### 📈 Performance
- Optimized MongoDB queries.
- Proper indexing of database fields.

### 🔐 Security
- Thorough input validation to prevent injection attacks.
- Sanitized error messages to avoid exposing sensitive information.
- Configured CORS to restrict access from unauthorized origins.
- Protection of sensitive environment variables.
