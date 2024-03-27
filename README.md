# newtern Portal

This project is developed by a team of three to create a platform where users can view internship/placement company details and allows student and staff coordinators to add posts.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Authors](#Authors)

## Features

- **User Authentication**: Allows users to sign up, log in, and log out securely.
- **View Posts**: Users can view internship/placement company details posted by staff coordinators and students.
- **Add Posts**: Staff coordinators and students can add posts about internship/placement opportunities.

## Technologies Used

- **MongoDB**: NoSQL database used for storing user information and posts.
- **Express.js**: Backend framework for building the RESTful API.
- **React.js**: Frontend library for building the user interface.
- **Node.js**: JavaScript runtime environment for running server-side code.
- **Multer**: Middleware for handling file uploads.
- **Axios**: Promise-based HTTP client for making requests from the frontend.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv**: Module for loading environment variables from a `.env` file.
- **React Router DOM**: Library for routing in React applications.
- **Context API**: For managing global state in React.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mern-internship-platform.git

2. Install dependencies for the server:

   ```bash
cd mern-internship-platform
npm install

3. Install dependencies for the client:

   ```bash
cd client
npm install

4. Create a .env file in the root directory and add the following environment variables:

   ```env
PORT=3001
MONGO_URL=your_mongodb_connection_string

5. Run the server:

   ```bash
npm start

6. Run the client:

   ```bash
cd client
npm start

## Usage
Visit http://localhost:5173 in your browser to access the application.
Sign up for a new account or log in if you already have one.
Explore internship/placement opportunities posted by staff coordinators and students.
Add posts to share internship/placement opportunities.

## Authors
Akilan
Bilal
Shiva
