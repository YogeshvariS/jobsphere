# JobSphere

JobSphere is a full-stack job portal application built with **Next.js 16**, **TypeScript**, **MongoDB Atlas**, and **NextAuth**. It is designed to connect job seekers with employers through a modern, scalable, and secure platform.

> **Project Status:** 🚧 Under Active Development

---

## Features Implemented

### Authentication

* User Registration API
* User Login API
* Password hashing using bcryptjs
* Password verification
* Request validation with Zod
* Initial NextAuth setup

### Database

* MongoDB Atlas integration
* Mongoose database connection
* User schema and model

### Backend

* Modular folder structure
* Environment variable configuration
* API routes using Next.js App Router

---

## Tech Stack

| Technology    | Purpose                    |
| ------------- | -------------------------- |
| Next.js 16    | Full-stack React Framework |
| TypeScript    | Type Safety                |
| MongoDB Atlas | Cloud Database             |
| Mongoose      | MongoDB ODM                |
| NextAuth      | Authentication             |
| Zod           | Input Validation           |
| bcryptjs      | Password Hashing           |

---

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

---

## Environment Variables

Create a `.env.local` file:

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

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open your browser:

```text
http://localhost:3000
```

---

## Roadmap

* Complete NextAuth Credentials Authentication
* Google OAuth Login
* Employer Dashboard
* Job Seeker Dashboard
* Job Posting & Management
* Job Search & Filtering
* Resume Upload (AWS S3)
* Role-Based Authorization
* Protected Routes
* Deployment

---

## Author

**Yogeshvari Suryawanshi**

Frontend Developer | MERN Stack Developer
