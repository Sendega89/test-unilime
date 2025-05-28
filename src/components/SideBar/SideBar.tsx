import React from "react"
import {Disc, Home, Settings, Users} from "lucide-react";
import {NavLink} from "react-router-dom";

const SideBar: React.FC = () => {
    type NavItemProps = {
        icon: React.ReactNode;
        label: string;
        link: string;
    };

    const NavItem = ({ icon, label, link }: NavItemProps) => (
        <div className="flex items-center space-x-3 p-2 transition-colors">
            {icon}
            <NavLink to={link} className={({ isActive }) =>
                `flex items-center space-x-3 p-2 rounded cursor-pointer transition-colors ${
                    isActive ? 'bg-gray-700 text-yellow-400' : 'hover:bg-gray-700 hover:text-white'
                }`
            }>{label}</NavLink>
        </div>
    );
    return (
        <nav className="w-64">
            <div className="h-screen rounded-md shadow-md dark:bg-gray-800 flex flex-col gap-4 p-3">
                <NavItem icon={<Home size={20} />} label="Home" link={'/'} />
                <NavItem icon={<Disc size={20} />} label="Overview" link={'/overview'} />
                <NavItem icon={<Users size={20} />} label="Users" link={'/users'} />
                <NavItem icon={<Settings size={20} />} label="Settings" link={'/settings'} />
            </div>
        </nav>
    );
};

export default SideBar;
