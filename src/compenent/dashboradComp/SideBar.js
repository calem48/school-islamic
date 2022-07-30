import React from 'react';
import { Link } from 'react-router-dom';
const SideBar = () => {
    return (
        <div>
            {/* side bar for dashborad */}
            <p><Link to="addUser" >go to add user</Link></p>
            <p><Link to="stats" >go to stats</Link></p>
        </div>
    );
}

export default SideBar;
