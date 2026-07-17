# Real-Time Chat Support

A production-ready real-time customer support chat application built with **React**, **TypeScript**, **Node.js**, **Express**, and **Socket.IO**. The application enables multiple users to join support rooms, exchange messages instantly, view online users, receive typing indicators, and access chat history.

---

# Features

## Real-Time Communication

* Join support rooms
* Instant messaging using Socket.IO
* Live online user updates
* Typing indicators
* Join/Leave notifications
* Chat history retrieval
* Automatic reconnection

---

## Frontend

* React 19
* TypeScript
* Vite
* Tailwind CSS
* Context API
* Custom Hooks
* Responsive UI
* Accessible forms
* Loading states
* Empty states
* Form validation

---

## Backend

* Node.js
* Express.js
* Socket.IO
* Modular architecture
* Service Layer
* Store Layer
* Validators
* Socket acknowledgements
* Centralized error handling
* Input sanitization
* Analytics logging

---

# Tech Stack

## Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Socket.IO Client
* React Hook Form
* Zod
* Lucide React

## Backend

* Node.js
* Express
* Socket.IO
* CORS
* Helmet
* Morgan

---

# Project Structure

```text
real-time-chat-support/

│
├── client/
│   ├── src/
│   │
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── context/
│   ├── socket/
│   ├── types/
│   └── utils/
│
├── server/
│   ├── src/
│   │
│   ├── socket/
│   ├── services/
│   ├── store/
│   ├── validators/
│   ├── utils/
│   ├── middleware/
│   ├── constants/
│   └── errors/
│
└── README.md
```

---

# Application Flow

```text
User
   │
   ▼
Join Room
   │
   ▼
Socket Connection
   │
   ▼
Join Room Event
   │
   ▼
Room Service
   │
   ▼
Room Store
   │
   ▼
Broadcast Updates
   │
   ├── Online Users
   ├── Join Notification
   ├── Leave Notification
   ├── Messages
   └── Typing Events
```

---

# Socket Events

| Event               | Description           |
| ------------------- | --------------------- |
| join-room           | Join a chat room      |
| users-updated       | Online users list     |
| send-message        | Send a message        |
| receive-message     | Receive a message     |
| user-typing         | User typing indicator |
| user-stopped-typing | Stop typing indicator |
| get-chat-history    | Retrieve chat history |
| disconnect          | User disconnect       |

---

# Getting Started

## Clone Repository

```bash
git clone <repository-url>
```

---

## Install Frontend

```bash
cd client
npm install
```

---

## Install Backend

```bash
cd server
npm install
```

---

# Environment Variables

## Backend (.env)

```env
PORT=5000
CLIENT_URL=http://localhost:5173
```

## Frontend (.env)

```env
VITE_SOCKET_URL=http://localhost:5000
```

---

# Running Locally

## Start Backend

```bash
cd server
npm run dev
```

---

## Start Frontend

```bash
cd client
npm run dev
```

---

# Production Build

Frontend

```bash
npm run build
```

Backend

```bash
npm start
```

---

# Deployment

## Backend

Deploy on **Render**

Required Environment Variables:

```env
PORT
CLIENT_URL
```

---

## Frontend

Deploy on **Vercel**

Required Environment Variable:

```env
VITE_SOCKET_URL
```

---

# Accessibility

* Keyboard accessible forms
* Semantic HTML
* Focus states
* ARIA labels
* Screen reader friendly inputs

---

# Security

* Message sanitization
* Input validation
* Socket acknowledgement handling
* Centralized error responses
* CORS configuration
* Helmet security headers

---

# Future Improvements

* Authentication
* Private messaging
* Message persistence with MongoDB
* Redis Pub/Sub
* Multiple chat rooms
* Read receipts
* Message reactions
* File sharing
* Emoji support
* Admin dashboard

---

# Author

**Sriniketh Vangipuram**

GitHub: https://github.com/Sriniketh-Vangipuram

---

# License

This project was developed as part of the **Prodesk IT Solutions Internship** for educational and portfolio purposes.
