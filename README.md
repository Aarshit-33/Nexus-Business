## Nexus: Cloud Accounting Platform

Nexus is a cloud-based accounting platform designed to streamline and enhance financial management for businesses. Developed using the MERN stack (MongoDB, Express.js, React.js, Node.js), it provides a comprehensive finance dashboard with tools for managing employees, customers, vendor bills, expenses, invoices, and payments. Nexus aims to improve efficiency, accuracy, and decision-making in financial operations.

### Key Features:
- **Expense Tracker**: Effortlessly record and categorize expenses to analyze spending patterns and identify areas for cost reduction.
- **Employee Management**: Maintain detailed records of employees, including personal details, roles, and salaries.
- **Customer Management**: Manage customer information and track interactions, invoices, and payments.
- **Vendor Management**: Generate and manage vendor bills, track expenses, and manage vendor-related payments.
- **Sales Management**: Generate invoices, track sales, and manage payment receipts for comprehensive sales oversight.

## Getting Started
To get started with Nexus, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Aarshit-33/Nexus.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd Nexus
    ```
3. **Install dependencies for the server and client:**
    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    ```
4. **Set up environment variables:**
   - Create a `.env` file in the server directory and add the following:
     ```env
     DATABASE=your_mongodb_uri
     PORT=your_server_port
     JWT_SECRET=your_jwt_secert
     ```
5. **Start the server and client:**
    ```bash
    cd backend
    npm run start
    cd ../frontend
    npm run dev
    ```


### Screenshots:

| **Feature**          | **Description**                                              | **Image**                                      |
|----------------------|--------------------------------------------------------------|------------------------------------------------|
| **Dashboard**  | Dashboard        | ![image](https://github.com/user-attachments/assets/8b9296b2-aadc-4eb1-92f7-a24b95b944d8) |
| **Expense Tracker**  | Record and categorize expenses for detailed analysis.        | ![image](https://github.com/user-attachments/assets/b213d28b-05db-44e7-b977-f9482c0e8428) |
| **Employee Management** | Maintain detailed records of employees.                   | ![image](https://github.com/user-attachments/assets/f36b3199-96df-4e0c-9225-160081a05bfd) |
| **Customer Management** | Track customer interactions, invoices, and payments.      | ![image](https://github.com/user-attachments/assets/0f72e56e-dafa-4154-9b7b-566d12eaaa9d) |
| **Vendor Management** | Manage vendor bills and payments.                           | ![image](https://github.com/user-attachments/assets/0fff73c5-de02-43a4-aaea-dd3e9aff266c) |
| **Sales Management** | Generate invoices and manage payment receipts.               | ![image](https://github.com/user-attachments/assets/e248ee2a-e0c8-4b0c-ae43-13e884f11426) |

### Conclusion:
Nexus is a robust platform that enhances business financial management by offering a suite of tools for tracking expenses, budgeting, and managing various financial aspects. Its user-friendly interface and comprehensive features make it an essential tool for modern businesses seeking efficient and accurate financial operations.
