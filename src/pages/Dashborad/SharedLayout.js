import React from 'react';
import { Navbar, SideBar } from '../../compenent/dashboradComp';
import { Outlet } from 'react-router-dom';
const SharedLayout = () => {
    return (
        <div>
            <Navbar />
            <SideBar />
            <Outlet />

        </div>
    );
}

export default SharedLayout;
