# MERN WebApp

A full-stack MERN (MongoDB, Express.js, React, Node.js) web application, built with Vite for the frontend and Express.js for the backend.
<br>

## Quick Links
- [🌐 Live App](https://mern-webapp-8pag.onrender.com/)
- [📂 GitHub Repository](https://github.com/pfjoana/MERN-webapp)


## Features
* Express.js backend with MongoDB
* Full-stack MERN architecture
* RESTful API with Express.js
* MongoDB database connection
* React frontend bundled with Vite
* Chakra UI for UI components
* Deployment-ready for Render.com
<br><br>

## Tech Stack
* Frontend: [React](https://reactjs.org), [Vite](https://vitejs.dev), [Chakra UI](https://chakra-ui.com)
* Backend: [Node.js](https://nodejs.org), [Express.js](https://expressjs.com)
* Database: [MongoDB](https://www.mongodb.com)
* Deployment: [Render.com](https://render.com)
<br><br><br>

# Installation & Setup
### 1️⃣ Clone the repository
```
git clone https://github.com/pfjoana/MERN-webapp
cd your-repo
```

### 2️⃣ Install Dependencies
```
npm install && npm install --prefix frontend
```

### 3️⃣ Set Up Environment Variables
Create a _.env_ file in the root directory and add:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
*(Do not commit .env to Git as it contains sensitive data!)*

### 4️⃣ Install Chakra UI
If you haven’t installed Chakra UI yet, you can do so with the following command:
```
npm install @chakra-ui/react@2 @emotion/react @emotion/styled framer-motion
```
<br><br><br>

# Run the Project
### Development Mode (with nodemon)
```
npm run dev
```
Runs the backend with nodemon, auto-restarting on changes.

### Build the Frontend
```
npm run build
```

**This will:**
* Set NODE_ENV=deployment
* Install dependencies for both backend and frontend
* Build the frontend with Vite


### Start the Server
```
npm start
```

**This will:**
* Set NODE_ENV=production
* Start the backend server
<br><br>

**The app should now be running on http://localhost:5000/**
<br><br><br>

# Deployment (Render.com)
* The project is deployed on Render.com.
* NODE_ENV is set directly in the scripts (start and build).
* The _.env_ file is ignored, so MongoDB credentials must be set in Render's environment variables.
<br><br>

**Notes**<br>
Free instances on Render sleep after inactivity but restart when accessed.<br>
MongoDB credentials should be updated in Render's environment settings, not in _.env._
