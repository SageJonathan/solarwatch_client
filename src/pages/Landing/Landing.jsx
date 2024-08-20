import Hero from "../../components/Hero";
import About from "../../components/About";
import Search from "../../components/Search/Search";
import "./Landing.scss";
import Cards from "../../components/Cards/Cards";


const baseUrl = import.meta.env.VITE_BASE_URL;

function HomePage() {
    return (
    <>
     <Hero />
     <About />
     <Search />
     <Cards />
    </>

    );
}

export default HomePage;
