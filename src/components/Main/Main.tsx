import React, {type ReactNode} from "react"
import SideBar from "../SideBar/SideBar.tsx";
interface MainProps {
    children: ReactNode;
}
const Main: React.FC<MainProps> = ({children}) => {

    return (
        <div className="flex">
            <SideBar />
            <main className="flex-1 p-4">{children}</main>
        </div>
    );
};

export default Main;
