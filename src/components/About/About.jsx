import exp from "constants";
import "./About.scss";

function About() {
  return (
    <div className="about">
      {/* <p className="about__header">Who are we?</p> */}
      <p className="about__text">
        Embark on your adventures with <strong>Solar Watch</strong>, the
        essential app for outdoor enthusiasts. <br></br>
        <br></br>Plan your hikes with accurate sunrise and sunset times,
        ensuring you catch every breathtaking dawn and avoid being caught after
        dark. Stay prepared with real-time weather updates, so you're ready for
        whatever nature brings. Whether scaling peaks or exploring trails, Solar
        Watch is your go-to guide for safe and memorable journeys.
      </p>
    </div>
  );
}

export default About;
