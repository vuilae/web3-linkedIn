import React from "react";
import "./Message.css";

import MessageData from "../../FackApis/MessageData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faEdit, faSearch } from "@fortawesome/free-solid-svg-icons";

function Message() {
  return (
    <div className="Meassage">
      <div className="message-top">
        <h4>Message</h4>
        <FontAwesomeIcon icon={faEdit} />
      </div>
      <div className="message-search">
        <FontAwesomeIcon icon={faSearch} />
        <input type="search" placeholder="Search Message" />
      </div>
      <div className="border-div"></div>
      {MessageData.map((mess) => (
        <Link to="/chatbox/id">
          <div className="message" key={mess.id}>
            <div className="user">
              <img src={mess.img} alt="" />
              <div className="green-active"></div>
            </div>
            <div className="message-body">
              <h5>{mess.name}</h5>
              <p>{mess.mText}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Message;
