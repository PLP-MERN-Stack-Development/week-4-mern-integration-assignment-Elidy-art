# MERN Blog Application

A full-stack blog application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that demonstrates seamless integration between front-end and back-end components.

## 🚀 Features

### Backend Features
- **RESTful API** with Express.js
- **MongoDB** database with Mongoose ODM
- **User Authentication** with JWT tokens
- **CRUD Operations** for blog posts and categories
- **Input Validation** and error handling
- **File Upload** support for images
- **Comments System** for blog posts
- **Pagination** and filtering
- **Role-based Authorization** (User/Admin)

### Frontend Features
- **Modern React** with hooks and context
- **Responsive Design** with Tailwind CSS
- **Form Validation** with React Hook Form
- **Protected Routes** for authenticated users
- **Real-time Notifications** with toast messages
- **Clean UI/UX** with modern design patterns

## 📁 Project Structure

```
mern-blog/
├── client/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context providers
│   │   ├── services/       # API services
│   │   └── App.jsx         # Main application component
│   └── package.json        # Client dependencies
├── server/                 # Express.js back-end
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Utility functions
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn

### Backend Setup

1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env
   ```

4. **Configure environment variables:**
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/mern-blog
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   JWT_EXPIRE=30d
   ```

5. **Start the server:**
   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Navigate to client directory:**
   ```bash
   cd client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>
```

### Posts Endpoints

#### Get All Posts
```http
GET /api/posts?page=1&limit=10&category=categoryId
```

#### Get Single Post
```http
GET /api/posts/:id
```

#### Create Post
```http
POST /api/posts
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "My First Post",
  "content": "This is the content of my first blog post...",
  "category": "categoryId",
  "excerpt": "A brief excerpt of the post",
  "tags": ["technology", "programming"]
}
```

#### Update Post
```http
PUT /api/posts/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Updated Post Title",
  "content": "Updated content..."
}
```

#### Delete Post
```http
DELETE /api/posts/:id
Authorization: Bearer <token>
```

#### Add Comment
```http
POST /api/posts/:id/comments
Authorization: Bearer <token>
Content-Type: application/json

{
  "content": "Great post! Thanks for sharing."
}
```

### Categories Endpoints

#### Get All Categories
```http
GET /api/categories
```

#### Create Category (Admin Only)
```http
POST /api/categories
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Technology",
  "description": "Technology related posts"
}
```

## 🗄️ Database Models

### User Model
```javascript
{
  username: String (required, unique),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (enum: ['user', 'admin']),
  avatar: String,
  bio: String,
  isActive: Boolean
}
```

### Post Model
```javascript
{
  title: String (required),
  content: String (required),
  featuredImage: String,
  slug: String (unique),
  excerpt: String,
  author: ObjectId (ref: User),
  category: ObjectId (ref: Category),
  tags: [String],
  isPublished: Boolean,
  viewCount: Number,
  comments: [CommentSchema]
}
```

### Category Model
```javascript
{
  name: String (required, unique),
  description: String,
  slug: String (unique),
  color: String,
  isActive: Boolean
}
```

## 🔐 Authentication & Authorization

- **JWT-based authentication** for secure user sessions
- **Password hashing** with bcryptjs
- **Role-based access control** (User/Admin)
- **Protected routes** for authenticated users
- **Token expiration** and automatic logout

## 🎨 Frontend Features

- **Responsive design** that works on all devices
- **Modern UI** with Tailwind CSS
- **Form validation** with React Hook Form
- **Toast notifications** for user feedback
- **Loading states** and error handling
- **Protected routes** with automatic redirects

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables for production
2. Configure MongoDB Atlas connection
3. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy to platforms like Vercel, Netlify, or GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Created as part of the MERN Stack Integration Assignment.

## 📸 Screenshots

*Screenshots of the working application would be included here*

---

**Note:** This is a complete MERN stack application demonstrating full-stack development with modern web technologies. The application includes user authentication, CRUD operations, and a responsive user interface. 