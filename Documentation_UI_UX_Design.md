# UI/UX Design Documentation

**This is the Figma link:**
https://www.figma.com/design/Q7S00KlEO1kfy1jwSnAUvd/Holloid-Design---DevelProject

## 1. UX/UI Workflow
I started by creating a simple wireframe (top left of the Figma canvas) to understand the basic structure of the card: what information is essential, how it should be grouped, and in what order it should be displayed for easy reading and understanding.

As a UX designer, I focused on functionality:
- The displayed information dynamically adapts based on the robot's status (e.g., delivery details are only shown when the status is "On Delivery").
- The "Return to Base" button is only active when the robot is in the Idle or On Delivery state, helping prevent incorrect actions.
- The layout was adapted for both mobile and desktop, ensuring a consistent and accessible user experience across all devices.

## 2. UI Design
As a UI designer, I moved on to the visual part:
- I created two versions - Light Mode and Dark Mode, both for desktop and mobile views, maintaining a clear visual hierarchy and optimal contrast for readability.

### Color Choices (UI + UX)
I used color variables in Figma for all states and elements, for several reasons:
- **Efficiency:** When you want to change a color, you only need to do it once, and it updates across all components automatically.
- **Consistency:** It ensures a clean, professional, and coherent visual identity.
- **Scalability:** The design is prepared for large teams or continuously evolving projects.

#### Color codes and meanings:
**Status:**
- OnDelivery - blue: indicates an active yet stable operation.
- Idle - gray: represents inactivity or standby mode.
- Returning - purple: shows the robot is transitioning back to base.
- Error - red: highlights critical issues.
- Order ID / ETA - orange: draws attention to delivery-related data.

**Battery Level:**
- BatteryHigh - green: optimal charge, everything is fine.
- BatteryWarning - orange: medium level, needs monitoring.
- BatteryLow - red: critical level, requires urgent action.

I also used a colored progress bar to visually indicate the battery level, allowing operators to quickly assess the situation without reading numbers.

## Conclusion
I followed a complete UX-first, UI-second process, starting from real user needs. The result is a clean, intuitive interface that's also easy to implement in development. The design is modular, adaptable, and scalable, ready to be integrated into a real-world robot monitoring system. 