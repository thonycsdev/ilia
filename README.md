# Ilia Project

Ilia is a project created as a challenge for the Ília selection process.

With this project, you can create customers and orders. Customers can have multiple orders, while each order is associated with only one customer.

## Features

- **Customers:**
  - Create a new customer.
  - Edit the information of an existing customer.
  - Remove a customer.

- **Orders:**
  - Create a new order, associating it with an existing customer.
  - Specify the products in the order.
  
- **Products:**
  - View the list of available products in the "Products" tab.

## Viewing Customer Orders

After creating orders and associating them with customers, you can return to the home page and click on the customer's card. There, you will see the list of orders assigned to that customer.



## Configuring the API in ASP.NET Core

1. Navigate to the directory of the API:
   ```bash
   cd ilia-api
   ```
2. Restore the project dependencies:
   ```bash
   dotnet restore
   ```
3. Apply database migrations (if applicable):
   ```bash
   dotnet ef database update
   ```
4. Start the API server:
   ```bash
   dotnet run
   ```


## Configuring the Next.js Project

1. Navigate to the directory of the Next.js project:
   ```bash
   cd ilia
   ```
2. Install the Node.js dependencies:
   ```bash
   npm install
   ```
3. Start the Next.js project:
   ```bash
   npm run dev
   ```
4. The frontend will be available at http://localhost:3000.

## Accessing the Application

You can now access the application in your browser:

- API Console: It will be reported in the console.
- API VS: Running the API project through Visual Studio will automatically open Swagger.
- Frontend: http://localhost:3000
