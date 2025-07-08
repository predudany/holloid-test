import React, { useState, useEffect } from 'react';
import RobotCard from './components/RobotCard';
import './App.css';

const initialRobots = [
  {
    robotId: "R2D1",
    model: "V2",
    status: "On Delivery",
    batteryLevel: 87,
    location: {
      latitude: 12.3344,
      longitude: -122.5162
    },
    currentOrder: {
      orderId: "ORD-12345",
      customerName: "",
      deliveryAddress: "Vienna, Holloid",
      estimatedDelivery: "2025-04-03T14:10:00Z"
    }
  },
  {
    robotId: "R2D2",
    model: "V2",
    status: "Idle",
    batteryLevel: 34,
    location: {
      latitude: 34.0522,
      longitude: -54.2437
    },
    currentOrder: {
      orderId: "ORD-12346",
      customerName: "Customer member",
      deliveryAddress: "Vienna, Holloid",
      estimatedDelivery: "2025-04-03T18:25:00Z"
    }
  },
  {
    robotId: "R1D2",
    model: "V1",
    status: "On Delivery",
    batteryLevel: 13,
    location: {
      latitude: -43.0580,
      longitude: -118.2437
    },
    currentOrder: {
      orderId: "ORD-12347",
      customerName: "Customer Customer",
      deliveryAddress: "Vienna, Holloid",
      estimatedDelivery: "2025-04-03T10:11:00Z"
    }
  },
  {
    robotId: "R1D3",
    model: "V1",
    status: "Error",
    batteryLevel: 20,
    location: {
      latitude: -43.0580,
      longitude: -118.2437
    },
    currentOrder: {
      orderId: "ORD-12347",
      customerName: "Customer Customer",
      deliveryAddress: "Vienna, Holloid",
      estimatedDelivery: "2025-04-03T10:11:00Z"
    }
  }
];

export default function App() {
  const [robots, setRobots] = useState(initialRobots);
  const [darkMode, setDarkMode] = useState(false);

  // ✅ Setează clasa pe <body> când se schimbă darkMode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleReturn = (robotId) => {
    const updated = robots.map(robot => {
      if (robot.robotId === robotId && (robot.status === "Idle" || robot.status === "On Delivery")) {
        return {
          ...robot,
          status: "Returning",
          currentOrder: null
        };
      }
      return robot;
    });
    setRobots(updated);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'day-mode'}`}>
      {robots.map((robot, index) => (
        <RobotCard key={index} {...robot} onReturn={handleReturn} />
      ))}
      <div className="mode-toggle">
        <button onClick={() => setDarkMode(prev => !prev)}>
          {darkMode ? 'Switch to Day Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </div>
  );
}
