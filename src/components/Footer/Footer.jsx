import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='container h-48 bg-primary py-8'>
        <div className="flex flex-col justify-bewteen">
            <div>
                <h1 className="font-bold text-white">FITZONE</h1>
                <span className="text-white/50">
                    © {new Date().getFullYear()} FITZONE PERFORMANCE LAB. PUSH YOUR LIMITS.
                </span>
            </div>
            <div className="gap-4">
                <Link to="/about" className="text-white/50 hover:text-white">
                    PRIVACY
                </Link>
                <Link to="/about" className="text-white/50 hover:text-white">
                    TERMS
                </Link>
                <Link to="/about" className="text-white/50 hover:text-white">
                    CONTACT
                </Link>
                <Link to="/about" className="text-white/50 hover:text-white">
                    COACHES
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer