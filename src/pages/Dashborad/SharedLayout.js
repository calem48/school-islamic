import React from 'react';
import { Navbar, SideBar } from '../../compenent/dashboradComp';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const SharedLayout = () => {
    return (
        <div>
            <Navbar />
            <Wrraper>
                <SideBar />
                <Outlet />
            </Wrraper>

        </div>
    );
}

// for testing nothing else
const Wrraper = styled.main`

display: flex;
justify-content: space-between;
width: 60%;

`

export default SharedLayout;
