# JobSphere

JobSphere is a modern job portal application built with **Next.js 16**, **TypeScript**, **MongoDB Atlas**, and **NextAuth**. The platform connects job seekers with employers and provides a scalable architecture for authentication, job posting, and job applications.

## Tech Stack

* Next.js 16 (App Router)
* TypeScript
* MongoDB Atlas
* Mongoose
* NextAuth
* Zod
* bcryptjs

## Features Completed

* Project setup with Next.js App Router
* Environment configuration
* MongoDB Atlas integration
* Mongoose database connection
* User model and schema
* User registration API
* Password hashing using bcryptjs
* User login API
* Password verification
* Input validation using Zod
* Initial NextAuth configuration

## Project Structure

```
src/
├── app/
│   ├── api/
│   ├── login/
│   └── register/
├── config/
├── database/
├── lib/
├── modules/
├── types/
└── middleware/
```

## Environment Variables

Create a `.env.local` file and add the following:

```env
MONGODB_URI=
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

AWS_REGION=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_BUCKET_NAME=
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

## Upcoming Features

* Credentials Authentication with NextAuth
* Google Authentication
* Employer Dashboard
* Job Seeker Dashboard
* Job Posting
* Job Search & Filters
* Resume Upload
* AWS S3 Integration
* Role-Based Authorization
* Protected Routes
* Deployment
