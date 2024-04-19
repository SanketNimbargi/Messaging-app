import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import "./mystyles.css"
import MessageOther from "./MessageOther";
import MessageSelf from "./MessageSelf";
import { useState } from "react";

export default function ChatArea() {

    const [conversations,setConversations] =useState([
        {
          name:"text#1",
          lastMessage:"Last Message #1",
          timeStamp:"today",
        },
        {
          name:"text#2",
          lastMessage:"Last Message #2",
          timeStamp:"today",
        },
        {
          name:"text#3",
          lastMessage:"Last Message #3",
          timeStamp:"today",
        },
      ]);

      var props = conversations[0];

    return (
        <div className="ChatArea-container">
            <div className="chatArea-header">
                <p className="con-icon">{props.name[0]}</p>
                <div className="header-text">
                    <p className="con-title">{props.name}</p>
                    <p className="con-timestamp">{props.timeStamp}</p>
                </div>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </div>
            <div className="messages-container">
                {/* Render your messages here */}
                {/* {lastMessage} */}
                <MessageOther />
                <MessageSelf />
                <MessageOther />
                <MessageSelf />
                <MessageOther />
                <MessageSelf />
                <MessageOther />
                <MessageSelf />
            </div>
            <div className="text-input-area">
            <input placeholder="search" className="search-box"/>
            <IconButton>
                <SendIcon />
            </IconButton>
            </div>
        </div>
    );
}
