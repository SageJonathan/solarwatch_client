import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
    return (
        <section className="header">
            <Link to={`/`}>
                <p className="header__title"> ☀️ Solar Watch</p>
            </Link>

        </section>
    )
}

export default Header;