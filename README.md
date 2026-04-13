# 🚀 Modern Resume Builder SaaS

A professional, full-stack Resume Builder built with **Spring Boot** and **MongoDB**. Featuring a sleek, high-fidelity "Deep Space" theme with glassmorphic UI elements and smooth ambient animations.

![Project Status](https://img.shields.io/badge/Status-Cloud--Ready-brightgreen)
![Tech Stack](https://img.shields.io/badge/Stack-Spring%20Boot%20|%20MongoDB%20|%20Thymeleaf-blue)

## ✨ Features

- **High-End UI/UX**: Modern glassmorphic cards, radial gradients, and fluid CSS liquid background animations.
- **Complete Auth System**: Secure User Signup and Login functionality.
- **Personal Dashboard**: Manage multiple resumes in a centralized "My Resumes" space.
- **Dynamic Builder Workspace**: Real-time form processing to generate professional resumes.
- **PDF Export**: Instant high-quality PDF generation of your resumes.
- **Cloud Ready**: Configured for seamless deployment to platforms like Render and MongoDB Atlas.

## 🛠️ Tech Stack

- **Backend**: Java 17, Spring Boot 3.2.4
- **Database**: MongoDB (Local or Atlas)
- **Templating**: Thymeleaf
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **PDF Engine**: Open HTML to PDF

## 🚀 Getting Started

### 1. Prerequisites
- **Java 17+** installed.
- **MongoDB** running locally on port `27017` (or provide a `MONGODB_URI`).

### 2. Installation
Clone the repository:
```bash
git clone https://github.com/Shubham-Kumar-1/resume-builder.git
cd resume-builder
```

### 3. Run Locally
Use the Maven Wrapper to build and run the application:
```bash
./mvnw spring-boot:run
```

The application will be available at: [http://localhost:8080](http://localhost:8080)

## ☁️ Deployment

This project is optimized for **Render** and **MongoDB Atlas**. 

1. **Database**: Set up a cluster on MongoDB Atlas and get your connection string.
2. **Environment Variable**: Set `MONGODB_URI` in your hosting platform's environment settings.
3. **Build Command**: `./mvnw clean install -DskipTests`
4. **Start Command**: `java -jar target/*.jar`

---
Built with ❤️ by [Shubham Kumar](https://github.com/Shubham-Kumar-1)
