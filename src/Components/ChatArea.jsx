import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import "./mystyles.css"
import MessageOther from "./MessageOther";
import MessageSelf from "./MessageSelf";

export default function ChatArea({ name, lastMessage, timeStamp }) {

    return (
        <div className="ChatArea-container">
            <div className="chatArea-header">
                <p className="con-icon">{name && name[0]}</p>
                <div className="header-text">
                    <p className="con-title">{name}</p>
                    <p className="con-timestamp">{timeStamp}</p>
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
