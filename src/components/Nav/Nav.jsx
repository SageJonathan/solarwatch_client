import "./Nav.scss";
import { Link } from "react-router-dom";

function Header() {
    return (
        <section className="nav">
            <Link to={`/`}>
            <div className="nav__container">
                <img className= "nav__img" src="/solarLogo.png" alt="solar watch logo" />
                <p className="nav__title"> Solar Watch</p>
            </div>
            </Link>
        </section>
    )
}

export default Header;