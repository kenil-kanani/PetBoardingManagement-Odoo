## API Documentation

### User APIs

#### 1. Signup
- **Endpoint:** `/api/signup`
- **Method:** POST
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123",
    "role": "user"
  }
  ```
- **Description:** Registers a new user with the given email, password, and role.
- **Responses:**
  - **201 Created:** User created successfully.
  - **500 Internal Server Error:** Error message if the creation fails.

#### 2. Login
- **Endpoint:** `/api/login`
- **Method:** POST
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Description:** Authenticates a user and returns a JWT token if successful.
- **Responses:**
  - **200 OK:** 
    ```json
    {
    "token": "TOKEN",
    "user": {
        "email": "kenil2@gmail.com",
        "role": "admin"
    }
}
    ```
  - **404 Not Found:** User not found or invalid credentials.
  - **500 Internal Server Error:** Other error messages.

### Middleware

#### 1. JWT Verification
- **Description:** Middleware to verify JWT tokens in the Authorization header of incoming requests.
- **Responses:**
  - **401 Unauthorized:** Unauthorized request or invalid access token.
  - **Usage:**
    - **Header:** `Authorization: Bearer <JWT_TOKEN>`
    - **Function:** Checks if the token is valid, decodes it to fetch user details, and attaches the user to the request object for further processing in subsequent middleware or routes.
