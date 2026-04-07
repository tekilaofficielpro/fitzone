import { Link } from "react-router-dom";
import { GoGraph } from "react-icons/go";
import { IoMdShare } from "react-icons/io";

const Footer = () => {
    return (
        <footer className='container flex flex-row justify-between h-48 bg-primary py-8'>
            <div>
                <h1 className="font-bold text-white text-xl">FITZONE</h1>
                <span className="text-white/50 text-sm">
                    © {new Date().getFullYear()} FITZONE PERFORMANCE LAB. PUSH YOUR LIMITS.
                </span>
            </div>
            <div className="m-5 space-x-4">
                <Link to="/privacy" className="text-white/50 hover:text-white text-sm">
                    PRIVACY
                </Link>
                <Link to="/terms" className="text-white/50 hover:text-white text-sm">
                    TERMS
                </Link>
                <Link to="/contact" className="text-white/50 hover:text-white text-sm">
                    CONTACT
                </Link>
                <Link to="/coaches" className="text-white/50 hover:text-white text-sm">
                    COACHES
                </Link>
            </div>
            <div className="flex gap-4 text-white/50 m-5">
                <IoMdShare className="size-5 cursor-pointer" />
                <GoGraph className="size-5 cursor-pointer" />
            </div>
        </footer>
    )
}

export default Footer