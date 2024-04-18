import "./mystyles.css";
import Sidebar from "./Sidebar";
import WorkArea from "./WorkArea"; // Uncomment when ready to use
import ChatArea from "./ChatArea";

export default function MainContainer() {
    const conversation = {
        name: "text#1",
        lastMessage: "Last message in conversation",
        timeStamp: "Today",
    };

    return (
        <div className="main-container">
            <Sidebar />
            {/* <WorkArea /> Uncomment when ready to use */}
            <ChatArea {...conversation} />
        </div>
    );
}
