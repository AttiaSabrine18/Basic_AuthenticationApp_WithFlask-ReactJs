# Flask React Authentication App

This is a  basic full-stack web application that uses Flask as the backend and React as the frontend. The application includes user authentication features such as registration and login.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Python 3.12.4
- Node.js v20.11.0
- npm 10.4.0

### Backend (Flask)

1. Clone the repository:

    ```sh
    git clone https://github.com/AttiaSabrine18/Basic_AuthenticationApp_WithFlask-ReactJs.git
    ```

2. Create a virtual environment and activate it:

    ```sh
    python -m venv env
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

4. Create a `.env` file in the root directory and add your environment variables:

    ```sh
    touch .env
    ```

    Add the following content to the `.env` file:

    ```env
    SECRET_KEY=your_secret_key
    DATABASE_URI=your_Strin_DB_Connection
    ```
6. Run the Flask application:

    ```sh
    flask run
    ```

### Frontend (React)

1. Navigate to the `client` directory:

    ```sh
    cd client
    ```

2. Install the required packages:

    ```sh
    npm install
    ```

3. Run the React application:

    ```sh
    npm run dev
    ```

## Usage

After following the installation steps, you can access the application at `http://localhost:5173/` for the frontend and `http://127.0.0.1:5000` for the backend API.

### Register

To register a new user, navigate to the registration page and fill out the form with your email and password.

### Login

To log in, navigate to the login page and enter your credentials. If successful, you will be redirected to the homepage.

## Project Structure

