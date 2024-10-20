# PandaPath - Your Gateway to Unforgettable Journeys Across China

Welcome to **PandaPath**, the ultimate travel platform that connects users with experienced travel consultants and curated travel itineraries across China. Whether you're seeking luxury tours, adventure trips, or cultural explorations, PandaPath offers personalized itineraries to make your journey extraordinary.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Screenshots](#screenshots)
---

## Features

- **Browse Tailored Itineraries**: Explore a variety of curated travel itineraries categorized by city, experience, and duration.
- **Agent Profiles**: View detailed profiles of travel agents, including their specialties, languages spoken, and reviews.
- **Custom Travel Planning**: Collaborate with expert agents to create personalized travel plans based on your preferences.
- **User Reviews**: Check out reviews from other travelers to ensure you get the best experience.
- **Multi-Language Support**: Interface available in English and Mandarin.
  
---

## Tech Stack

### Frontend
- **React.js** – for building a dynamic, user-friendly interface.
- **Vite** – For fast development and build tooling
- **Tailwind CSS** – for responsive and modern UI design.

### Backend
- **Node.js** – For server-side logic and API handling
- **Supabase (PostgreSQL)** – Managed database solution for storing user data, itineraries, and agents

### Email
- **EmailJS** – Used to handle email submissions directly from the front end without a custom backend.

---

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/jamalona/PandaPath.git
    cd PandaPath
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_api_key

4. **Run the development server:**
   npm run dev
