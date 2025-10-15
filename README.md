# MERN Comment Board

## Project Overview

This is a simple, full-stack web application designed to demonstrate proficiency in the MERN stack (MongoDB, Express, React, Node.js). The primary function of this app is to serve as a basic social feed where users can **read and post comments**. It is a minimalist implementation of a social board, focusing purely on core **CRUD** (Create and Read) operations to connect the client and server layers.

## Key Features

* **View Comments:** Fetch and display all stored comments from the MongoDB database.
* **Post Comments:** Submit new comments via a form to the Express API.
* **Persistent Data:** All comments are stored securely in MongoDB (Atlas).
* **Real-time Feel:** Immediate update of the comment list upon submission.

## Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React (with Vite) | Building the user interface and managing client-side state. |
| **State Management** | React Hooks (`useState`, `useEffect`) | Handling component logic and data fetching. |
| **API Client** | Axios | Making HTTP requests to the backend. |
| **Backend/API** | Node.js / Express | Creating a RESTful API to handle routing and business logic. |
| **Database** | MongoDB (via Mongoose) | Persistent, non-relational data storage for comments. |

## ⚙️ How to Run the Project (Locally)

Follow these steps to get the application running on your local machine.

### 1. Prerequisites

* Node.js (LTS version recommended)
* MongoDB Atlas Account (or a local MongoDB instance)

### 2. Backend Setup

1.  Navigate to the `/backend` folder.
    ```bash
    cd backend
    ```
2.  Install server dependencies.
    ```bash
    npm install
    ```
3.  Create a file named **`.env`** in the `/backend` folder and add your MongoDB connection string (replace with your actual credentials):
    ```env
    MONGO_URI="your-mongodb-atlas-connection-string"
    PORT=5000
    ```
4.  Start the Express server.
    ```bash
    npm run dev
    ```

### 3. Frontend Setup

1.  Open a **second terminal** and navigate to the `/frontend` folder.
    ```bash
    cd frontend
    ```
2.  Install client dependencies.
    ```bash
    npm install
    ```
3.  Start the React application.
    ```bash
    npm run dev
    ```

The application will now be running, typically accessible at `http://localhost:5173`.
