import userEvent from '@testing-library/user-event'
import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />    
            <SidebarRow Icon={ChatIcon} title="Messenger" />    
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
        </div>
    )
}

export default Sidebar
