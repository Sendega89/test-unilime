import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "../pages/Home/Home.tsx";
import Page404 from "../pages/Page404/Page404.tsx";
import Overview from "../pages/Overview/Overview.tsx";
import Users from "../pages/Users/Users.tsx";
import Settings from "../pages/Settings/Settings.tsx";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path={`/`} element={<Home/>}/>
            <Route path="*" element={<Page404 codePage={'404'}/>}/>
            <Route path="overview" element={<Overview/>}/>
            <Route path="users" element={<Users/>}/>
            <Route path="settings" element={<Settings/>}/>
        </Routes>
    );
};

export default AppRoutes;
