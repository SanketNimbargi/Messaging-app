import {useState} from "react";
import "./mystyles.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import ConversationItem from "./CoversationItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";

export default function Sidebar(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LightTheme = useSelector((state) => state.themeKey);
  
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
        <div className={"sb-header" + (LightTheme ? "" : " dark")}>
          <div>
            <IconButton >
              <AccountCircleIcon  className={"icon" + (LightTheme ? "" : " dark")}
            />
            </IconButton>
         </div>
        

         <div>
         <IconButton onClick={() => {navigate("users")}}>
          <PersonAddIcon  className={"icon" + (LightTheme ? "" : " dark")}
          />
        </IconButton>
        <IconButton onClick={() => {navigate("groups")}} >
          <GroupAddIcon  className={"icon" + (LightTheme ? "" : " dark")}
          />
        </IconButton>
        <IconButton onClick={() => {navigate("create-groups")}}>
          <AddCircleIcon  className={"icon" + (LightTheme ? "" : " dark")}
            />
        </IconButton>
         
        <IconButton  onClick={() => {
              dispatch(toggleTheme());
            }}>
          {LightTheme &&    <NightlightIcon  className={"icon" + (LightTheme ? "" : " dark")}
            /> }
          {!LightTheme &&    <LightModeIcon  className={"icon" + (LightTheme ? "" : " dark")}
            /> }
        </IconButton>
         </div>
       
        </div>
        <div className={"sb-search" + (LightTheme ? "" : " dark")}>
        <IconButton >
            <SearchIcon />
        </IconButton>
            <input placeholder="search"  className={"search-box" + (LightTheme ? "" : " dark")}/>
        </div>
        <div className={"sb-conversations" + (LightTheme ? "" : " dark")}>
        {conversations.map((conversation)=>{
          return <ConversationItem props={conversation} key={conversation.name} />
        })};
          
        </div>
        </div>
    );
}