
## Mania Store

Mania Store is a backend application built with Express, TypeScript, and Mongoose. This project follows an industry-standard modular pattern for managing routes and functionalities.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
  - [Development](#development)
  - [Production](#production)
- [Building the Application](#building-the-application)
- [Linting and Formatting](#linting-and-formatting)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/mania-store.git
   cd mania-store
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

## Configuration

Create a `.env` file in the root directory and add the following environment variables:

```env
DB_URL=mongodb+srv://<username>:<password>@your-database.###.mongodb.net/?retryWrites=true&w=majority&appName=your-database
PORT=3000
```

Replace `your-database` ,  `username`, `password` & `###` with the name of your MongoDB database, username & password.

## Running the Application

### Development

To run the application in development mode with hot reloading:

```sh
npm run dev
```

### Production

To run the application in production mode:

1. Build the project:

   ```sh
   npm run build
   ```

2. Start the application:

   ```sh
   npm run prod
   ```

## Building the Application

To build the TypeScript project:

```sh
npm run build
```

This will compile the TypeScript files into JavaScript and place them in the `dist` folder.

## Linting and Formatting

To lint the code:

```sh
npm run lint
```

To fix linting errors automatically:

```sh
npm run lint:fix
```

To format the code using Prettier:

```sh
npm run prettier
```

To fix formatting issues automatically:

```sh
npm run prettier:fix
```

## Folder Structure

The project structure is organized as follows:

```
mania-store/
├── dist/                   # Compiled output
├── node_modules/           # Node.js modules
├── src/                    # Source files
│   ├── app.ts              # Express app setup
│   ├── server.ts           # Server entry point
│   └── modules/            # Modules for different features
│       ├── products/       # Product module
│       │   ├── product.controller.ts
│       │   ├── product.interface.ts
│       │   ├── product.model.ts
│       │   ├── product.routes.ts
│       │   ├── product.services.ts
│       │   └── product.validation.ts
│       ├── orders/         # Order module
│       │   ├── order.controller.ts
│       │   ├── order.interface.ts
│       │   ├── order.model.ts
│       │   ├── order.routes.ts
│       │   ├── order.services.ts
│       │   └── order.validation.ts
│       └── ...             # Other modules
├── .env                    # Environment variables
├── .eslintignore           # ESLint ignore file
├── .eslintrc.js            # ESLint configuration
├── .gitignore              # Git ignore file
├── package.json            # npm scripts and dependencies
└── tsconfig.json           # TypeScript configuration
```

## API Endpoints

### Products

- `POST /products` - Create a new product
- `GET /products` - Get all products
- `GET /products/:id` - Get a product by ID
- `PUT /products/:id` - Update a product by ID
- `DELETE /products/:id` - Delete a product by ID

### Orders

- `POST /orders` - Create a new order
- `GET /orders` - Get all orders
- `GET /orders/:id` - Get an order by ID
- `PUT /orders/:id` - Update an order by ID
- `DELETE /orders/:id` - Delete an order by ID


```

This `README.md` provides comprehensive instructions on how to set up and run your application, along with details about the project structure, available scripts, and API endpoints.
