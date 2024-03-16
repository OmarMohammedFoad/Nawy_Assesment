# Apartment Management System

This project implements an Apartment Management System, with functionalities to list all apartments, retrieve a single apartment by ID, and create a new apartment. The backend is built using Node.js with MongoDB as the database, and the frontend is developed using Next.js with Tailwind CSS for styling.

## API Endpoints

### Get an apartment by ID

Endpoint: http://localhost:9000/api/apartment/list/[id]
Description:
This endpoint retrieves a single apartment from the database based on its ID.

### List all apartments

Endpoint: http://0.0.0.0:9000/api/apartment/list
Description:
This endpoint retrieves a list of all apartments stored in the database.

### Create a new apartment

Endpoint: http://localhost:9000/api/apartment/create
Description:
This endpoint creates a new apartment in the database.

## Technologies Used

- Backend:

  - Node.js
  - Express.js
  - MongoDB

- Frontend:
  - Next.js
  - Tailwind CSS

## Running the Application

### Prerequisites

- Docker

### Instructions

1. Clone this repository to your local machine.
2. Navigate to the `api` directory.
3. Ensure that your MongoDB instance is running.
4. Run the following command to start the application using Docker Compose:
   ```
   docker-compose up
   ```
5. Access the frontend application by navigating to `http://localhost:3000` in your web browser.

### Running the Client Side

1. Navigate to the `client` directory.
2. Run the following command to install dependencies:
   ```
   npm install
   ```
3. Start the client-side application by running:
   ```
   npm run dev
   ```

The API will be accessible at `http://localhost:9000`, and the client-side application will be accessible at `http://localhost:3000`.
