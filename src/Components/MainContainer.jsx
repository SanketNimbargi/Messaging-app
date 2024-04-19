import {useState} from "react";
import "./mystyles.css";
import Sidebar from "./Sidebar";
import WorkArea from "./WorkArea"; // Uncomment when ready to use
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";
import Login from "./Login";
import Users from "./Users";
import { Outlet } from "react-router-dom";

export default function MainContainer() {
    // const conversation = {
    //     name: "text#1",
    //     lastMessage: "Last message in conversation",
    //     timeStamp: "Today",
    // };
   

    return (
        <div className="main-container">
            <Sidebar />
            <Outlet />
            {/* <WorkArea /> Uncomment when ready to use */}
            {/* <ChatArea {...conversation} /> */}
            {/* <ChatArea props={conversations[0]} /> */}
            {/* <Welcome /> */}
            {/* <CreateGroups /> */}
            {/* <Login /> */}
            {/* <Users /> */}
        </div>
    );
}
