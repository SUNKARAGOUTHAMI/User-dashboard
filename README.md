# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

View User List: Display a list of users with basic details such as name, email, and ID.
Add New User: Add a new user to the system.
Edit Existing User: Modify details of an existing user.
Delete User: Remove a user from the system.
This project is designed to manage and manipulate user data and interactions effectively. It demonstrates core features of a CRUD (Create, Read, Update, Delete) application, allowing users to interact with a simulated backend API.

Key Features
View Users:

Display a table with user information (ID, Name, and Email).
Users are fetched from a mock API (JSONPlaceholder) on page load.
Add New User:

Form to add a new user by entering Name and Email.
Automatically updates the user list on successful addition.
Edit Existing User:

Click "Edit" to open a pre-filled form with the user details.
Make changes and save the updated information.
Delete User:

Each user has a "Delete" button that removes them from the list.
Technologies Used
React: JavaScript library for building the user interface.
Axios: HTTP client for making API requests (used to fetch, add, and delete users).
CSS: Basic styling for the app layout.
JSONPlaceholder API: Mock API used for fetching user data.
Installation and Setup
Prerequisites
Node.js and npm (Node Package Manager) should be installed.
Steps
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/your-username/user-management-app.git
cd user-management-app
Install Dependencies:

bash
Copy
Edit
npm install
Start the App:

bash
Copy
Edit
npm start
Open your browser and go to http://localhost:3000/ to start using the app.

How the Application Works
Fetch Users: The app initially fetches a list of 10 users from JSONPlaceholder when the app loads. This simulates an API call and displays user data in a table.

Add User: When the "Add User" button is clicked, a form opens where you can enter the user’s name and email. After submitting, the new user is added to the list.

Edit User: Clicking the "Edit" button next to a user brings up a form pre-filled with the user’s data. After editing, the changes are reflected in the table.

Delete User: Clicking the "Delete" button next to a user removes that user from the list.

