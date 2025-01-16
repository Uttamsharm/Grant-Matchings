Pexel Project
A full-stack web application that provides features such as user authentication and grants management. Built using the MERN stack (MongoDB, Express, React, Node.js), this project is divided into two main parts:

Frontend: React-based user interface located in the client folder.
Backend: Node.js/Express-based API located in the server folder.
Features
Frontend (Client)
User Authentication: Login functionality with Context API.
Dynamic Routing: Implemented using react-router-dom.
Reusable Components: Modular structure for better scalability.
API Integration: Fetches data from the backend using Axios.
Responsive Design: Optimized for both desktop and mobile devices.
Backend (Server)
RESTful APIs: CRUD operations for users and grants.
Authentication: JWT-based authentication.
Error Handling: Custom middleware for centralized error management.
Database Integration: MongoDB using Mongoose for schema definition.
CORS Support: Enabled to allow frontend-backend communication.
Project Structure
graphql
Copy code
Pexel/
├── client/              # React frontend
│   ├── public/          # Static files
│   ├── src/
│   │   ├── assets/      # Images and other assets
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Application pages
│   │   ├── context/     # Context API for state management
│   │   ├── services/    # API handlers
│   │   ├── utils/       # Helper functions
│   │   ├── styles/      # Global styles
│   │   ├── App.js       # Main React component
│   │   ├── index.js     # React entry point
│   │   └── config.js    # Frontend configuration
├── server/              # Node.js backend
│   ├── controllers/     # Controller logic for handling routes
│   ├── middlewares/     # Middleware (e.g., authMiddleware.js)
│   ├── models/          # MongoDB models (e.g., User.js)
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions (e.g., token generation)
│   ├── server.js        # Entry point for the backend
├── .gitignore           # Files to be ignored by Git
├── README.md            # Project documentation
└── package.json         # Node.js dependencies and scripts
Installation and Setup
Prerequisites
Node.js and npm
MongoDB
Backend Setup
Navigate to the server directory:

bash
Copy code
cd server
Install dependencies:

bash
Copy code
npm install
Create a .env file in the server directory and add the following environment variables:

makefile
Copy code
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
Start the backend server:

bash
Copy code
npm run dev
Frontend Setup
Navigate to the client directory:

bash
Copy code
cd client
Install dependencies:

bash
Copy code
npm install
Create a .env file in the client directory and add the following environment variables:

arduino
Copy code
REACT_APP_API_URL=http://localhost:5000
Start the development server:

bash
Copy code
npm start
Usage
Start the backend server:

bash
Copy code
cd server
npm run dev
Start the frontend server:

bash
Copy code
cd client
npm start
Open your browser and navigate to http://localhost:3000.

APIs
User API
POST /api/users/login: User login.
GET /api/users/profile: Get logged-in user profile (protected route).
Grants API
GET /api/grants: Fetch all grants.
POST /api/grants: Create a new grant (protected route).
Dependencies
Frontend
React
React Router DOM
Axios
Context API
Backend
Express
Mongoose
JWT
bcrypt
CORS
