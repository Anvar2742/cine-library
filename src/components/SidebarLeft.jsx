import { Link, NavLink } from "react-router-dom";
import { generalLinks, libLinks, menuLinks } from "../assets/constants";

const NavLinks = ({ menu, menuTitle }) => {
    return (
        <div className="w-full first:mb-10">
            <h3 className="font-bold text-title-gray text-lg mb-6">
                {menuTitle}
            </h3>
            <nav>
                {menu.map((item) => (
                    <NavLink
                        className="flex items-center font-semibold text-lg mb-6 h-8 w-full relative hover:text-secondary sidelink transition-colors
                            after:block after:absolute after:right-0 after:h-full after:w-1 after:rounded-sm after:transition-colors after:bg-transparent hover:after:bg-secondary
                        "
                        key={item.name}
                        to={item.to}
                    >
                        <item.icon className="mr-6" size={24} />
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

const SidebarLeft = () => {
    return (
        <aside className="bg-black-dark text-white-gray flex flex-col justify-around items-start pl-[38px] h-full">
            <Link to="/" className="text-white-gray text-4xl font-bold leading-6">
                CINE <br />
                <span className="text-xl">LIBRARY</span>
            </Link>

            <div className="w-full">
                <NavLinks menu={menuLinks} menuTitle="Menu" />
                <NavLinks menu={libLinks} menuTitle="Library" />
            </div>
            <NavLinks menu={generalLinks} menuTitle="General" />
        </aside>
    );
};

export default SidebarLeft;
