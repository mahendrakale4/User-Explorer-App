# User List App

## This React app fetches a list of users from the JSONPlaceholder API and displays them in a user-friendly format

## Usage
1. Clone the repository:
```bash
git clone https://github.com/mahendrakale4/User-Explorer-App.git
cd User-Explorer-App
```
2. Install dependencies:
```bash
npm install
```
3. Run the app:
```bash
npm start
```
4. Open your browser and navigate to `localhost` to view the app.

## Features

### 1. User List Display:
Fetches user data from JSONPlaceholder API.
Displays a list of users in an unordered list `<ul>` using the User component.

### 2. Loading State:
Implements a loading state to display `Loading...` while user data is being downloaded from the API.
Enhances user experience by providing feedback during data fetching.

### 3. Abort Controller:
Uses an `AbortController` to cancel the API request when the component unmounts.
Improves resource management and prevents potential memory leaks.

### 4. Reusable Component:
Utilizes a reusable User component that takes a `name prop` and returns the `name` inside an li element.
Promotes code modularity and maintainability.
