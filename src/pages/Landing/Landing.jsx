import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import SearchLocal from "../../components/SearchLocal/SearchLocal";
import SearchGps from "../../components/SearchGps/SearchGps";
import SearchAdv from "../../components/SearchAdv/SearchAdv";
import Cards from "../../components/Cards/Cards";
import "./Landing.scss";

function Landing() {
  return (
    <>
      <Hero />
      <About />
      <h2 className="search__title">Try it out yourself!</h2>
      <div className="row">
        <SearchLocal />
        <SearchGps />
      </div>
      <SearchAdv />
      {/* <Cards /> */}
    </>
  );
}

export default Landing;
