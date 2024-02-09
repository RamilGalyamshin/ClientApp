import React from "react";
import { chat-bubble-left-right, device-phone-mobile } from "@heroicons/react/24/solid";

const CustomerHeader = ({ chat }) => {
  return (
    <div className="chat-header">
      <div className="flexbetween">
        <chat-bubble-left-right className="icon-chat" />
        <h3 className="header-text">{chat.title}</h3>
      </div>
      <div className="flexbetween">
        <device-phone-mobile className="icon-phone" />
        {chat.description !== "⬅️ ⬅️ ⬅️" ? (
          <p className="header-text">{chat.description}</p>
        ) : (
          <p className="header-text">no chat selected</p>
        )}
      </div>
    </div>
  );
};

export default CustomerHeader;