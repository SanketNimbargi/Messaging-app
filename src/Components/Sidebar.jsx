import {useState} from "react";
import "./mystyles.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import ConversationItem from "./CoversationItem";


export default function Sidebar(){
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


    return (
        <div className="sidebar-container">
        <div className="sb-header">
          <div>
            <IconButton >
              <AccountCircleIcon />
            </IconButton>
         </div>
        

         <div>
         <IconButton >
          <PersonAddIcon />
        </IconButton>
        <IconButton >
          <GroupAddIcon />
        </IconButton>
        <IconButton >
          <AddCircleIcon />
        </IconButton>
        <IconButton >
          <NightlightIcon />
        </IconButton>
         </div>
       
        </div>
        <div className="sb-search">
        <IconButton >
            <SearchIcon />
        </IconButton>
            <input placeholder="search" className="search-box"/>
        </div>
        <div className="sb-conversations">
        {conversations.map((conversation)=>{
          return <ConversationItem props={conversation} key={conversation.name}/>
        })};
          
        </div>
        </div>
    );
}