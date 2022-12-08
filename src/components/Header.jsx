import * as Icon from "react-bootstrap-icons";
import { Route, Routes } from "react-router-dom";

const Header = ({ searchValue, handleSearchChange, changeTabs, tabs }) => {
    return (
        <header
            className="flex justify-between items-center pb-4 pt-12 bg-black-darkest px-16
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
                                    className={`
                                                link text-white-gray text-2xl font-semibold relative cursor-pointer pb-2 [&:not(:last-child)]:mr-10
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

            <form
                className="text-title-gray text-md flex items-center bg-black-dark rounded-2xl border border-border-gray h-14
                    focus-within:border-gray-400 
                "
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
