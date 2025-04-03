# CodeSled Auth Demo

This is a full-stack demo showing how to use [`@codesled/auth`](https://www.npmjs.com/package/@codesled/auth) inside a Node.js + Express + MongoDB application.

It handles user **registration**, **login**, and access to a **protected profile route** using secure JWT tokens.

---

##  Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/CodeSled/codesled-auth-demo.git
cd codesled-auth-demo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file at the root:

```env
PORT=5050
MONGO_URI=mongodb://127.0.0.1:27017/<db name>
JWT_SECRET=super-secret-code
```

---

##  Project Structure

```bash
codesled-auth-demo/
├── index.js                  # App entrypoint
├── .env.example             # Sample environment config
├── models/
│   └── User.js              # Mongoose user schema
├── routes/
│   ├── auth.routes.js       # /auth/register and /auth/login
│   └── profile.routes.js    # /profile (protected)
```

---

## 🔐 What This Demo Includes

-  `@codesled/auth` authentication logic
-  Mongoose model for users
-  `/auth/register` — user registration
-  `/auth/login` — login and JWT token
-  `/profile` — protected route using middleware

---

##  Example Requests (POSTMAN)

### Register

```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "12345678"
}
```

### Login

```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "12345678"
}
```

Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

### Access Protected Route

```http
GET /profile
Authorization: Bearer <token>
```

Response:
```json
{
  "message": "Welcome to your profile",
  "user": {
    "email": "user@example.com",
    "iat": 1712174012,
    "exp": 1712177612
  }
}
```

---

##  Built With

- [Express](https://expressjs.com)
- [Mongoose](https://mongoosejs.com)
- [@codesled/auth](https://www.npmjs.com/package/@codesled/auth)

---

##  Local MongoDB Required

Make sure you have MongoDB running locally:

```bash
mongod
```

Or replace `MONGO_URI` in `.env` with your [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) connection string.

---

##  License

MIT — free to use, modify, and share.
