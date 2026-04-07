import { NavLink } from "react-router-dom"
import { navList } from "../utils/links"


const Navbar = () => {
    return (
        <header className='bg-[#09090B] py-6 h-20 shadow-xl shadow-red-800/30'>
            <nav className='container font-bold px-4 flex justify-between'>
                <a href="/">
                    <span className='text-white text-xl'>FITZONE</span>
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
                <button className="bg-secondary text-white h-10 w-42">START FREE TRIAL</button>
            </nav>
        </header>
    )
}

export default Navbar