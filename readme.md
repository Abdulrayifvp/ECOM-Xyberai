# Xyber-Ecom

A modern e-commerce platform built with Node.js, Express, EJS, and Supabase.

## Features

- User authentication (signup/login)
- Role-based authorization (admin/user)
- Product management (admin)
- Product catalog browsing
- Product details with reviews
- Responsive design using Tailwind CSS

## Tech Stack

- Backend: Node.js, Express.js
- Database: Supabase
- Views: EJS templating
- Styling: Tailwind CSS
- Authentication: bcrypt, express-session

## Prerequisites

- Node.js (v14 or higher)
- npm
- Supabase account and project

## Installation

1. Clone the repository:
```sh
git clone <repository-url>
cd ECOM-Xyberai
```

2. Install dependencies:
```sh
npm install
```

3. Create a `.env` file in the root directory with your Supabase credentials:
```sh
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```sh
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
├── config/         # Configuration files
├── controllers/    # Route controllers
├── db/            # Database models and migrations
├── middleware/    # Custom middleware
├── routes/        # Express routes
├── views/         # EJS templates
└── server.js      # Application entry point
```

## Routes

### Auth Routes
- GET `/auth/login` - Login page
- GET `/auth/signup` - Signup page
- POST `/auth/signup` - Register new user
- POST `/auth/login` - Authenticate user
- GET `/auth/logout` - Logout user

### Admin Routes
- GET `/admin/dashboard` - Admin dashboard
- GET `/admin/add-product` - Add product form
- POST `/admin/add-product` - Create new product

### User Routes
- GET `/` - Landing page with product catalog
- GET `/product-details` - Product details page
- POST `/add-review` - Add product review

## Deployment

The project includes Vercel configuration for easy deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel
4. Deploy

