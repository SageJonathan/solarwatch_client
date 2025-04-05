import Hero from "../../components/Hero/Hero";
import SearchLocal from "../../components/SearchLocal/SearchLocal";
import SearchGps from "../../components/SearchGps/SearchGps";
import SearchAdv from "../../components/SearchAdv/SearchAdv";
import About from "../../components/About/About";
import "./Landing.scss";

function Landing() {
  return (
    <>
      <Hero />
      <h2 className="search__title">Get Real Time Data</h2>
      <div className="row">
      <SearchGps />
      <SearchLocal />
      </div>
      <SearchAdv />
      <About />
    </>
  );
}

export default Landing;
