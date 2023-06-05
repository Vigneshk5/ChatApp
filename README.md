# mern-chatApp

A simple chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

![Screenshot 1](https://github.com/Vigneshk5/mern-chatApp/assets/97999742/7c937ee5-8c4c-4783-9eed-b374d4ec6f03)

![Screenshot 2](https://github.com/Vigneshk5/mern-chatApp/assets/97999742/8fe5f338-a708-4d3a-be6a-de112f267848)

## Features

- Real-time messaging between users
- User authentication and authorization
- Message history
- Emojis and file sharing support

## Demo

Check out the live demo of the MERN Chat Application [here](https://mern-chat-app-indol.vercel.app/).

## Installation

To run the MERN chat application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Vigneshk5/mern-chatApp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mern-chatApp
   ```

3. Install the dependencies for the server:

   ```bash
   cd api
   yarn install
   ```

4. Install the dependencies for the client:

   ```bash
   cd ../client
   yarn install
   ```

5. Create a `.env` file in the server directory and provide the following environment variables:

   ```
   MONGODB_URI=YOUR_MONGODB_URI
   JWT_SECRET=YOUR_JWT_SECRET
   CLIENT_URL=CLIENT_URL
   ```

   Replace `YOUR_MONGODB_URI` with your MongoDB connection string and `YOUR_JWT_SECRET` with a secret key for JWT token generation.

6. Start the server:

   ```bash
   cd ../api
   yarn start
   ```

7. Start the client:

   ```bash
   cd ../client
   yarn start
   ```

8. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the application.

## Technologies Used

- MongoDB: A NoSQL document database for storing messages and user data.
- Express.js: A web application framework for building the server-side API.
- React.js: A JavaScript library for building the user interface.
- Node.js: A JavaScript runtime for executing server-side code.
- WebSockets: A technology for enabling real-time, bidirectional communication between clients and the server.
