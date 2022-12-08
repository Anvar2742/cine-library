import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Main from "./components/Main";
import SidebarLeft from "./components/SidebarLeft";
import "swiper/css";
import Header from "./components/Header";
import SidebarRight from "./components/SidebarRight";
import { navLinks } from "./assets/constants";
import SingleTitle from "./pages/SingleTitle";
import SingleSidebarRight from "./components/SingleSidebarRight";

function App() {
    const [searchValue, setSearchValue] = useState("");
    const [tabs, setTabs] = useState(navLinks);
    const [mainTab, setMainTab] = useState("movie");
    const [mainComponentCount, setMainComponentCount] = useState(3);
    const [imagesCount, setImagesCount] = useState(0);
    const [isMainLoading, setIsMainLoading] = useState(true);

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
        updateMainLoading(true);
    }

    function updateMainLoading(isLoading) {
        setIsMainLoading(isLoading);
    }

    function updateImagesCount(count) {
        if (count === -1) {
            setImagesCount(0);
            return;
        }
        setImagesCount((prev) => prev + 1);
    }

    return (
        <div className="grid grid-cols-main h-full font-sans bg-black-darkest">
            <SidebarLeft />
            <div className="overflow-auto overflow-x-hidden">
                <Header
                    searchValue={searchValue}
                    handleSearchChange={handleSearchChange}
                    changeTabs={changeTabs}
                    tabs={tabs}
                />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <Main
                                mainTab={mainTab}
                                isMainLoading={isMainLoading}
                                updateMainLoading={updateMainLoading}
                                mainComponentCount={mainComponentCount}
                                updateImagesCount={updateImagesCount}
                                imagesCount={imagesCount}
                            />
                        }
                    ></Route>
                    <Route path="title">
                        <Route
                            path="/title/:type/:titleId"
                            element={<SingleTitle />}
                        />
                    </Route>
                </Routes>
            </div>
            <Routes>
                <Route
                    exact
                    path="*"
                    element={
                        <SidebarRight
                            mainTab={mainTab}
                            isMainLoading={isMainLoading}
                        />
                    }
                ></Route>
                <Route path="title">
                    <Route
                        path="/title/:type/:titleId"
                        element={
                            <SingleSidebarRight />
                        }
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
