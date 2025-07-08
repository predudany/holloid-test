# Holloid Design & Development Challenge

This project is a submission for the Holloid Design & Development Challenge. It features a modern, responsive Robot Monitoring UI built with React and Vite, styled according to a provided Figma design.

## 🌐 Figma Design

- [View the Figma project](https://www.figma.com/design/Q7S00KlEO1kfy1jwSnAUvd/Holloid-Design---DevelProject)

## 🧭 UX/UI Design Process

### 1. UX Workflow
- **Wireframing:** Started with a simple wireframe to define the card’s essential information, grouping, and reading order for clarity and ease of use.
- **Dynamic Information:** The UI adapts based on the robot’s status (e.g., delivery details appear only when status is "On Delivery").
- **Action Controls:** The "Return to Base" button is enabled only when the robot is Idle or On Delivery, preventing invalid actions.
- **Responsive Layout:** Designed for both mobile and desktop, ensuring a consistent and accessible experience across all devices.

### 2. UI Workflow
- **Light & Dark Modes:** Created both light and dark themes for desktop and mobile, maintaining clear visual hierarchy and optimal contrast.
- **Color System:** Used Figma color variables for all states and elements, ensuring:
  - Efficiency: Change a color once, update everywhere.
  - Consistency: Clean, professional, and coherent visual identity.
  - Scalability: Ready for large teams and evolving projects.
- **Status Colors:**
  - On Delivery: Blue (active, stable)
  - Idle: Gray (standby)
  - Returning: Purple (transitioning)
  - Error: Red (critical)
  - Order ID / ETA: Orange (delivery focus)
- **Battery Colors:**
  - High: Green (optimal)
  - Warning: Orange (medium, monitor)
  - Low: Red (critical, urgent)
- **Battery Bar:** A colored progress bar visually indicates battery level for quick assessment.

### 3. Design Principles
- **UX-first, UI-second:** The process started from real user needs, resulting in a clean, intuitive, and developer-friendly interface.
- **Modular & Scalable:** The design is modular, adaptable, and ready for integration into real-world robot monitoring systems.

## 🚀 Tech Stack
- React (with Vite)
- CSS Modules
- React Icons

## 📦 Getting Started

To run the project locally:

```bash
git clone https://github.com/predudany/holloid-challenge.git
cd holloid-challenge
npm install
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173)

## 📁 Folder Structure

```
holloid-challenge/
├── public/
├── src/
│   ├── components/
│   │   └── RobotCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
├── package.json
└── README.md
```

## ✅ Features
- Responsive Robot Card UI
- Dynamic battery & status display
- Fully styled according to design mockup
- Clean and maintainable code

## 👤 Author
- Name: Daniel Predusel
- Email: predudany09@gmail.com

---

> Built with ❤️ for Holloid
