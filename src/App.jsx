import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Main from "./components/Main";
import SidebarLeft from "./components/SidebarLeft";
import "swiper/css";
import Header from "./components/Header";
import SidebarRight from "./components/SidebarRight";
import { navLinks } from "./assets/constants";

function App() {
    const [searchValue, setSearchValue] = useState("");
    const [tabs, setTabs] = useState(navLinks);
    const [mainTab, setMainTab] = useState("movie");
    const [mainComponentCount, setMainComponentCount] = useState(3);
    const [isMainLoading, setIsMainLoading] = useState([]);

    function handleSearchChange(e) {
        setSearchValue(e.target.value);
    }

    function changeTabs(tab) {
        setMainTab(tab);
        setTabs((prevTabs) => {
            return prevTabs.map((prevTab) => {
                return prevTab.to === tab
                    ? {
                          ...prevTab,
                          isActive: true,
                      }
                    : {
                          ...prevTab,
                          isActive: false,
                      };
            });
        });
        updateMainLoading([]);
    }

    function updateMainLoading(isLoading) {
        if (!isLoading) {
            setIsMainLoading(prevLoading => {
                return [
                    ...prevLoading,
                    isLoading
                ]
            });
        } else {
            setIsMainLoading(isLoading);
        }
    }

    return (
        <div className="grid grid-cols-main h-full font-sans font-extrabold bg-black-darkest">
            <SidebarLeft />
            <div className="overflow-auto overflow-x-hidden">
                <Header
                    searchValue={searchValue}
                    handleSearchChange={handleSearchChange}
                    changeTabs={changeTabs}
                    tabs={tabs}
                />
                <Main
                    mainTab={mainTab}
                    isMainLoading={isMainLoading}
                    updateMainLoading={updateMainLoading}
                    mainComponentCount={mainComponentCount}
                />
            </div>
            <SidebarRight />
        </div>
    );
}

export default App;
