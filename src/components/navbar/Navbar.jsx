import "./style.css"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="header-navbar">
            <Link to="/">
                <img className="home-btn" src="/assets/images/home-btn.png" alt="Home Btn" />
            </Link>
        </div>
    )
}

export default Navbar
