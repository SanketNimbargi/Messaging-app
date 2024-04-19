import { IconButton } from "@mui/material";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import "./mystyles.css"

export default function CreateGroups(){
    return (
        <div className="createGroups-container">
            <input placeholder="Enter Group Name" className="search-box" />
            <IconButton >
               <DoneOutlineIcon />
            </IconButton>
        </div>
    );
}