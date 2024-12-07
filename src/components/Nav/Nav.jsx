import "./Nav.scss";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/icons/home.png"

function Header() {
    return (
        <section className="nav">
            <Link to={`/`}>
            <div className="nav__container">
                <img className= "nav__logo" src="/solarLogo.png" alt="solar watch logo" />
                <p className="nav__title"> Solar Watch</p>
                <img src={homeIcon} alt="Go Home" className="nav__home"/>
            </div>
            </Link>
        </section>
    )
}

export default Header;