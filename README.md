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

## Current Progress

* ✅ Project initialized with Next.js App Router
* ✅ MongoDB Atlas connected
* ✅ Database connection using Mongoose
* ✅ User authentication APIs (Register & Login)
* ✅ Password hashing with bcryptjs
* ✅ Request validation using Zod
* ✅ Initial NextAuth setup

## Project Structure

```text
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

Open your browser and visit:

```text
http://localhost:3000
```

## Upcoming Features

* Complete NextAuth Credentials authentication
* Google OAuth authentication
* Employer Dashboard
* Job Seeker Dashboard
* Job Posting & Management
* Job Search & Filtering
* Resume Upload (AWS S3)
* Role-Based Authorization
* Protected Routes
* Deployment (Vercel)

## Author

Developed by **Yogeshvari Suryawanshi**
