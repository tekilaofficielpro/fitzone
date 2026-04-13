import { NavLink } from "react-router-dom"
import { navList } from "../utils/links"
import { useState } from "react"
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-[#09090B] py-6 h-20 shadow-xl shadow-red-800/30'>
            <nav className='container font-bold px-4 flex justify-between'>
                <a href="/">
                    <span className='text-white text-xl md:mt-2 '>FITZONE</span>
                </a>
                <ul className="sm:flex hidden items-center gap-8">
                    {
                        navList.map((list, index) => (
                            <li key={index} className="text-white">
                                <NavLink
                                    to={list.path.toLowerCase()}
                                    className={({ isActive }) =>
                                        isActive ? "text-secondary border-b-2 border-secondary" : ""
                                    }
                                >
                                    {list.name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                <button className="hidden lg:block bg-secondary text-white h-10 w-42">START FREE TRIAL</button>

                <div className="flex items-center sm:hidden">
                <button onClick={toggleMenu} className="flex items-center px-3 py-3 bg-tertiary rounded-md text-md text-gray-800 hover:text-gray-500">
                    {
                        isMenuOpen ? <IoMdClose className="size-4" /> : <TiThMenu className="size-4" />
                    }
                </button>
            </div>

            {
                isMenuOpen && (
                    <ul className="fixed top-[80px] right-0 w-3/4 h-full pb-5 bg-tertiary text-white shadow-md z-50">
                        {
                            navList.map((list, index) => (
                                <li key={index} className="mt-3 px-4">
                                    <NavLink
                                        onClick={() => setIsMenuOpen(false)}
                                        to={list.path.toLowerCase()}
                                        className={({ isActive }) =>
                                            isActive ?"text-secondary border-b-2 border-secondary" : ""
                                        }    
                                    >
                                        {list.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
            </nav>
        </header>
    )
}

export default Navbar