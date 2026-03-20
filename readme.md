# Luna: Your AI Compassionate Companion

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Gemini AI](https://img.shields.io/badge/AI-Gemini--2.0--Flash-orange?logo=google-gemini&logoColor=white)](https://ai.google.dev/)

**Luna** is a sophisticated, empathetic mental health assistant designed to provide emotional support and a listening ear. Built with a robust modern stack comprising React, Node.js, Express, and MongoDB, and powered by Google's Gemini-2.0-Flash model, Luna offers users a safe space to express their feelings, practice mindfulness, and track their emotional journey through an integrated digital journal.

The project is specifically crafted for individuals seeking a non-judgmental conversational partner. Whether you're navigating daily stressors, managing work-life balance, or simply need someone to talk to, Luna's warm and gentle persona ensures that every interaction is supportive and restorative. Key benefits include instant access to emotional support, privacy-first data handling, and integrated journaling features for deeper self-reflection.

Luna is more than just a chatbot; it's a digital companion designed with emotional intelligence at its core. By focusing on reflective listening rather than problem-solving, Luna empowers users to explore their own thoughts and feelings in a structured yet conversational environment.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation Instructions](#installation-instructions)
- [Configuration Guide](#configuration-guide)
- [Usage Examples](#usage-examples)
- [API Documentation](#api-documentation)
- [Testing Instructions](#testing-instructions)
- [Deployment Guide](#deployment-guide)
- [Contributing Guidelines](#contributing-guidelines)
- [License Information](#license-information)
- [Support and Contact](#support-and-contact)
- [Changelog](#changelog)

---

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js**: version 18.x or higher (LTS recommended) [Download](https://nodejs.org/)
- **npm**: version 9.x or higher (comes with Node.js)
- **MongoDB**: A running instance of MongoDB (local or [Atlas](https://www.mongodb.com/cloud/atlas))
- **Google AI Studio API Key**: Required for Gemini AI integration [Get Key](https://aistudio.google.com/app/apikey)

---

## Installation Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/chatbot.git
cd chatbot
```

### 2. Install Dependencies

Install root, client, and server dependencies:

**Root directory:**

```bash
npm install
```

**Client directory:**

```bash
cd client
npm install
```

**Server directory:**

```bash
cd ../server
npm install
```

---

## Configuration Guide

Create a `.env` file in the **server** directory (or the root if preferred) and add the following environment variables:

| Variable              | Description                             | Example Value               |
| :-------------------- | :-------------------------------------- | :-------------------------- |
| `PORT`                | The port the backend server will run on | `5000`                      |
| `MONGODB_URI`         | Your MongoDB connection string          | `mongodb://localhost:27017` |
| `VITE_GEMINI_API_KEY` | Your Google Gemini API Key              | `AIzaSy...`                 |

> **Note**: Ensure the `.env` file is added to your `.gitignore` to prevent leaking sensitive information.

---

## Usage Examples

### Starting the Application

You will need to run both the frontend and backend simultaneously.

**Start the Backend (Server):**

```bash
cd server
npm run dev
```

**Start the Frontend (Client):**

```bash
cd client
npm run dev
```

The application will typically be accessible at `http://localhost:5173` (Vite's default) and the API at `http://localhost:5000`.

### Interacting with Luna

Once the application is running, navigate to the "Talk" page to start a conversation with Luna. Luna will respond with empathetic, short, and conversational messages designed to help you process your emotions.

---

## API Documentation

The backend exposes several RESTful endpoints for managing conversations and journal entries.

### Chat API

- **Endpoint**: `POST /api/chat`
- **Description**: Sends a message to Luna and receives an AI-generated reply.
- **Payload**: `{ "message": "I'm feeling a bit stressed today." }`
- **Response**: `{ "reply": "I'm sorry to hear that. It's completely okay to feel stressed sometimes. What's been on your mind lately?" }`

### Journal API

- **Endpoint**: `POST /api/entries`
  - **Payload**: `{ "userId": "...", "title": "...", "content": "..." }`
- **Endpoint**: `GET /api/entries?userId=...`
  - **Description**: Retrieves all journal entries for a specific user.
- **Endpoint**: `DELETE /api/entries/:id`
  - **Description**: Deletes a specific journal entry by its ID.

---

## Testing Instructions

Currently, the project uses a manual testing approach. To run available linting checks:

```bash
cd client
npm run lint
```

Future updates will include unit tests using Vitest (for client) and Jest/Supertest (for server).

---

## Deployment Guide

### Frontend (Vite)

Build the production-ready assets:

```bash
cd client
npm run build
```

Deploy the `dist/` folder to platforms like **Vercel**, **Netlify**, or **GitHub Pages**.

### Backend (Node.js)

Ensure your production environment (e.g., **Railway**, **Render**, or **Heroku**) has the necessary environment variables configured (`MONGODB_URI`, `PORT`, `VITE_GEMINI_API_KEY`).

---

## Contributing Guidelines

We welcome contributions! To ensure a smooth process, please follow these guidelines:

1. **Coding Standards**: Use ESLint as configured in the project. Follow React best practices.
2. **Commit Messages**: Use [Conventional Commits](https://www.conventionalcommits.org/) (e.g., `feat: add new journal feature`).
3. **Pull Requests**: Open a PR with a clear description of the changes and link any relevant issues.
4. **Code Review**: All PRs must be reviewed by at least one maintainer before merging.

---

## License Information

This project is licensed under the **ISC License**.

```text
ISC License (ISC)

Copyright (c) 2026, [Your Name or Organization]

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.
```

---

## Support and Contact

If you encounter any issues or have questions, please reach out through the following channels:

- **Issue Tracker**: [GitHub Issues](https://github.com/your-username/chatbot/issues)
- **Maintainer**: [Your Name](mailto:your-email@example.com)
- **Discord**: [Join our Community](https://discord.gg/your-invite-link)

---

## Changelog

### [v1.0.0] - 2026-03-20

- **Initial Release**: Core chat functionality with Luna persona.
- **Journal Feature**: Ability to create, view, and delete journal entries.
- **Gemini Integration**: Integration with Gemini-2.0-Flash for empathetic AI responses.
- **Responsive UI**: Mobile-friendly design using Tailwind CSS and Framer Motion.
