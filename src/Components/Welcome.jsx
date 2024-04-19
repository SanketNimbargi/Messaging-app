import logo from "../Images/logo.png";
import "./mystyles.css"
export default function Welcome(){
    return (
        <div className="welcome-container">
        <img src={logo} alt="Logo" className="welcome-logo" />
        <p>View and text directly to people present in the chat Rooms.</p>
        </div>
    );
}