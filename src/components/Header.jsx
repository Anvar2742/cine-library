import { useEffect, useRef } from "react";
import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { Route, Routes } from "react-router-dom";

const Header = ({
    searchValue,
    handleSearchChange,
    changeTabs,
    tabs,
    setMainOverflow,
}) => {
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const searchFormRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                !searchFormRef.current === event.target ||
                !searchFormRef.current.contains(event.target)
            ) {
                setIsOpenSearch(false);
                setMainOverflow(true);
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    const openSearch = () => {
        setIsOpenSearch(true);
        setMainOverflow(false);
    };

    return (
        <header
            className="flex justify-between items-center pb-4 pt-12 bg-black-darkest px-4 md:px-16
        "
        >
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <div className="flex">
                            {tabs.map((item) => (
                                <button
                                    key={item.name}
                                    className={`link text-white-gray text-base md:text-2xl font-semibold relative cursor-pointer pb-2 [&:not(:last-child)]:mr-6 sm:[&:not(:last-child)]:mr-12
                                                after:block after:absolute after:-bottom-0 after:w-full after:h-[4px] after:transition-colors after:rounded-[92px] hover:after:bg-secondary
                                                ${
                                                    item.isActive &&
                                                    "after:bg-secondary"
                                                }
                                            `}
                                    onClick={() => changeTabs(item.to)}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    }
                ></Route>
            </Routes>

            <button
                className="bg-black-dark rounded-2xl border border-border-gray h-10 px-4 active:border-gray-400 transition-colors sm:hidden"
                onClick={openSearch}
            >
                <Icon.Search className="fill-white" />
            </button>
            <div
                className={`h-screen w-screen bg-slate-500 fixed top-0 bottom-0 left-0 right-0 z-20 opacity-70 ${
                    isOpenSearch ? "block" : "hidden"
                } sm:hidden`}
            ></div>
            <form
                ref={searchFormRef}
                className={`text-title-gray text-md flex items-center bg-black-dark rounded-2xl border border-border-gray h-14
                            focus-within:border-gray-400
                            transition-all fixed left-0 right-0 mx-auto w-[85%] z-30
                            sm:static sm:m-0 sm:w-auto sm:block
                            ${isOpenSearch ? "top-10" : "-top-full"}`}
            >
                <input
                    type="text"
                    className="bg-transparent border-0 text-md h-full pl-6"
                    placeholder="Search"
                    value={searchValue}
                    onChange={handleSearchChange}
                />
                <button type="submit" className="pr-6 h-full">
                    <Icon.Search className="ml-4" />
                </button>
            </form>
        </header>
    );
};

export default Header;
