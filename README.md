# E-commerce CURD Application

This is an E-commerce CRUD (Create, Read, Update, Delete) application built using Node.js, Express.js, GraphQL, Sequelize, and PostgreSQL. It allows users to manage products and categories within an e-commerce platform.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- CRUD operations for products and categories.
- GraphQL API for querying and mutating data.
- PostgreSQL database for data storage.
- Sequelize ORM for database interactions.
- Express.js for handling HTTP requests.
- Modular project structure for scalability and maintainability.

## Getting Started

### Prerequisites

Before running this project, ensure that you have the following installed on your system:

- Node.js and npm
- PostgreSQL

### Installation

1. Clone the repository:

```bash
git clone https://github.com/shreyanshtri26/ecommerce-curd.git
```
2. Navigate to the project directory:

    ```bash
    cd ecommerce-curd
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up the PostgreSQL database:

    - Create a PostgreSQL database named `ecommerce` (or any other name of your choice).
    - Update the database credentials in the `src/db/database.js` file.

5. Run the application:

    ```bash
    npm start
    ```

Usage
1. Access the GraphQL API at

    ```cmd
     http://localhost:4000/graphql
    ```
2. Use tools like GraphiQL or Postman to interact with the API.
3. Perform CRUD operations on products and categories using GraphQL queries and mutations.

##Folder Structure

```css
ecommerce-curd/
  ├── src/
  |   ├── db/
  |   |   ├── database.js
  |   |   └── Post.js
  |   ├── schema/
  |   |   └── post.graphql
  |   ├── resolvers.js
  |   └── index.js
  └── package.json
```

###Technologies Used
-Node.js
-Express.js
-GraphQL
-Sequelize
-PostgreSQL

##Contributing
    Contributions are welcome! If you'd like to contribute to this project,
    please follow these steps:

1.Fork the repository.
2.Create your feature branch: git checkout -b feature-name
3.Commit your changes: git commit -m 'Add some feature'
4.Push to the branch: git push origin feature-name
5.Submit a pull request

