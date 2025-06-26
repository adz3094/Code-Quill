# ✨ Code & Quill

**Code & Quill** is a modern, full-stack tech blogging platform built using the MERN stack. It allows users to explore, search, and filter blogs by topic — while also providing an admin interface for managing content, comments, and blog status. With integrated AI and image optimization features, it blends functionality with creativity.

---

## 🚀 Features

- 🔍 **Home Page**: Search and filter blogs by category
- 📝 **AI Blog Generator**: Use Google Gemini API to auto-generate blog content
- 🖼️ **Image Resizing**: ImageKit API for optimized media delivery
- 🛠️ **Admin Panel**:
  - Login/logout for admin users
  - View, publish/unpublish, and delete blog posts
  - View, approve, or delete user comments

---

## 🧰 Tech Stack

### 🌐 Frontend
- **React.js**
- **TailwindCSS**
- **HTML5 + JavaScript (ES6)**

### 🌍 Backend
- **Node.js**
- **Express.js**
- **Mongoose (MongoDB Atlas)**

### 🔌 Integrations
- **Google Gemini API** – for generating blog content
- **ImageKit API** – for resizing and optimizing images
- **Nodemon** – for live server updates during development

---

## 🛠️ Local Setup

### Clone the repository
git clone https://github.com/adz-3094/code-and-quill.git
cd code-and-quill

### Install server dependencies
cd server
npm install

### Install client dependencies
cd ../client
npm install

### Start the client and server
npm run dev   # or use concurrently / separate terminal tabs

⚠️ Make sure to create .env files in both client and server directories with the required API keys and MongoDB URI.

Credits to GreatStack Youtube Channel for teaching me how to make this. 😊🫶

# 🤝 Contributing
Wanna help improve Code & Quill? PRs and suggestions are more than welcome!
Just fork the repo, make your changes, and open a pull request 🌸

