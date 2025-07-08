import React from 'react';
import './RobotCard.css';
import { IoMdPause, IoMdTime } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { RiArrowGoBackFill } from "react-icons/ri";
import { GiElectric } from "react-icons/gi";
import { VscError } from "react-icons/vsc";
import { MdOutlineArrowBackIosNew, MdAccessTime } from "react-icons/md";


const getStatusColor = (status) => {
  switch (status) {
    case "On Delivery": return "status-delivery";
    case "Returning": return "status-returning";
    case "Idle": return "status-idle";
    case "Error": return "status-error";
    default: return "";
  }
};

const getBatteryClass = (level) => {
  if (level > 40) return "green";
  if (level > 15) return "yellow";
  return "red";
};

export default function RobotCard({ robotId, model, status, batteryLevel, currentOrder, onReturn }) {
  const statusColor = getStatusColor(status);
  const batteryClass = getBatteryClass(batteryLevel);
  const isReturnEnabled = status === "On Delivery" || status === "Idle";

  const handleClick = () => {
    if (isReturnEnabled) onReturn(robotId);
  };

  const getStatusIcon = () => {
    switch (status) {
      case "On Delivery":
        return <TbTruckDelivery className="status-icon" />;
      case "Idle":
        return <IoMdPause className="status-icon" />;
      case "Returning":
        return <RiArrowGoBackFill className="status-icon" />;
      case "Error":
        return <VscError className="status-icon" />;
      default:
        return null;
    }
  };

  const getBatteryIcon = () => {
    if (batteryLevel > 40) return <GiElectric className="battery-icon" />;
    if (batteryLevel > 15) return <GiElectric className="battery-icon" />;
    return <GiElectric className="battery-icon" />;
  };

  return (
    <div className="robot-card" role="region" aria-label={`Robot ${robotId}`}>
      <div className="robot-header">
        <div><strong>Robot ID</strong><br />{robotId}</div>
        <div style={{ textAlign: "right" }}><strong>Model</strong><br />{model}</div>
      </div>
      <div className="robot-status">
        <div><span className="label">Status:</span></div>
        <div className={`status-tag ${statusColor}`}>{getStatusIcon()} {status}</div>
        <div><span className="label">Battery:</span></div>
        <div className="battery-wrapper">
          <div className="battery-container">
            <div className={`battery-fill ${batteryClass}`} style={{ width: `${batteryLevel}%` }}></div>
            <div className="battery-label">
              {getBatteryIcon()} {batteryLevel}%
            </div>
          </div>
          <div className="battery-cap"></div>
        </div>
      </div>

      {status === "On Delivery" && currentOrder && (
        <div className="order-info">
          <div className="order-row">
            <h3 className="order-label">Order ID</h3>
            <p className="order-id">{currentOrder.orderId}</p>
          </div>

          <div className="eta-row">
            <div className="eta-label">
              ETA <MdAccessTime className="eta-icon" />
            </div>
            <p className="eta-time">
              {new Date(currentOrder.estimatedDelivery).toLocaleTimeString([], {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
              }).toLowerCase()}
            </p>
          </div>
        </div>
      )}
      <div className="return-wrapper">
        <button className="return-btn" onClick={handleClick} disabled={!isReturnEnabled}>
          <MdOutlineArrowBackIosNew className="return-icon" /> Return to Base
        </button>
      </div>
    </div>
  );
}