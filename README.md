# MakeWay

**A responsive, multilingual web marketplace connecting India's skilled workers and student innovators with households, businesses, startups, institutions, and organizations.**

MakeWay bridges the trust and discoverability gap for two underserved groups: blue‑collar skilled labour (electricians, plumbers, carpenters, tailors, mechanics, etc.) and student/early‑career innovators (developers, designers, engineers, creators). It provides verified profiles, searchable skills, student portfolios, intelligent recommendations, job posting, secure communication, booking, ratings, and transparent opportunity discovery — all through a mobile‑responsive website.

---

## 🎯 Problem Statement

India has a large population of skilled workers and student innovators who struggle to find consistent, fairly‑paid work due to:

- Lack of visibility and verified digital presence.
- Reliance on informal word‑of‑mouth networks and unreliable classifieds.
- No unified platform that serves both skilled tradespeople and student talent.

Existing job portals focus on white‑collar or generic gig work, leaving a three‑sided market failure: underemployed workers, wasted student potential, and inefficient hiring for clients.

---

## ✨ Key Features

### For Skilled Workers
- Create verified profiles (skills, certifications, experience, location, availability).
- Upload work samples, certifications, and service areas.
- Receive job recommendations and booking requests.
- Manage bookings, messages, earnings, and reviews.

### For Student Innovators
- Showcase portfolios: projects, prototypes, skills, certifications, GitHub/demo links.
- Get matched with freelance, internship, and micro‑project opportunities.
- Track applications, team invitations, milestones, and endorsements.

### For Employers & Clients
- Post requirements (one‑time, part‑time, full‑time, internship, freelance, prototype).
- Search and filter talent by skill, location, rating, verification, price, and availability.
- Compare profiles, chat securely, book services, and leave reviews.

### Trust & Safety Layer
- Identity, mobile, skill, and certificate verification badges.
- Ratings and reviews (only after completed bookings).
- Secure in‑platform communication until booking confirmation.
- Admin moderation for verification, disputes, and reports.

### Platform & Accessibility
- Responsive design (desktop, laptop, tablet, mobile browsers).
- Multilingual support and lightweight pages for low‑bandwidth users.
- Keyboard navigation, strong contrast, alt text, and clear error messages.
- Privacy controls: public/private fields, data correction, account deletion, grievance redressal.

---

## 🧭 User Roles

- **Skilled Worker** – Service provider (electrician, plumber, carpenter, etc.).
- **Student Innovator** – Student/early‑career freelancer with projects and skills.
- **Client/Employer** – Individual or organization hiring for jobs, gigs, or projects.
- **Administrator** – Manages users, verification, jobs, reports, disputes, and analytics.

---

## 🗺️ Site Structure

### Public Pages (no login)
- Home
- About MakeWay
- Browse Skilled Workers
- Browse Student Innovators
- Browse Jobs & Projects
- How Verification Works
- Safety & Trust
- FAQs
- Contact Us
- Login / Register

### Private Pages (login required)

**Worker Dashboard**
- Profile completion & verification status
- Recommended jobs, applications, bookings
- Messages, earnings, reviews, availability

**Student Dashboard**
- Portfolio & projects
- Recommended opportunities, applications
- Team invitations, messages, milestones
- Reviews & endorsements

**Client Dashboard**
- Post requirements, manage job posts
- Recommended talent, shortlisted profiles
- Messages, active bookings, payment status, reviews

**Admin Dashboard**
- Total users, pending verification
- Active jobs, completed bookings
- Reported users, disputes, platform revenue, user activity

---

## 🖥️ Technology Stack (Prototype)

- **Frontend:** React + Tailwind CSS (mobile‑responsive)
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **Authentication:** Firebase Authentication (or custom OTP simulation)
- **File Storage:** Cloudinary or Firebase Storage
- **Hosting:** Vercel (frontend), Render/Railway (backend)
- **Notifications:** Email, browser notifications, SMS alerts; optional WhatsApp links

*(Scalable variant: Next.js, NestJS/Express, PostgreSQL, OpenSearch, S3‑compatible storage, regulated payment gateway.)*

---

## 🗄️ Core Data Models (Simplified)

- **Users:** `id, name, email, phone, password_hash, role, language, location, verification_status, created_at`
- **Worker Profiles:** `id, user_id, profession, skills[], experience, service_area, availability, price_range, description, profile_image`
- **Student Profiles:** `id, user_id, institution, course, year, skills[], bio, resume_url, portfolio_url, availability`
- **Projects:** `id, student_id, title, description, technologies[], images[], demo_url, verification_status`
- **Jobs:** `id, client_id, title, category, description, location, budget_min, budget_max, job_type, deadline, status`
- **Applications:** `id, job_id, applicant_id, proposal, quoted_price, status`
- **Bookings:** `id, job_id, client_id, provider_id, agreed_price, status, start_date, completion_date`
- **Reviews:** `id, booking_id, reviewer_id, reviewee_id, rating, comment, created_at`

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase (authentication , database management , overall backend connection)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/makeway.git
cd makeway

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Environment Variables

Create `.env` files in `backend/` and `frontend/` as needed. Example (backend):

```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/makeway
JWT_SECRET=your_jwt_secret
FIREBASE_PROJECT_ID=your_firebase_project_id
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Running Locally

```bash
# Start backend
cd backend
npm run dev

# Start frontend (in another terminal)
cd frontend
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 🧪 Demo Flow (For Presentations)

### Journey 1: Skilled Worker
1. Worker registers as an electrician.
2. Creates profile, uploads work images.
3. Admin approves "Identity Verified"
