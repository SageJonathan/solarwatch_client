import exp from "constants";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <p className="about__title">Who are we?</p>
      <p className="about__writing">
        Step into the wild with confidence using <strong>Solar Watch</strong>,
        the premier app designed for adventurers like you. <br></br>
        <br></br>Get precise sunrise and sunset times to plan your hikes
        perfectly, ensuring you never miss a breathtaking dawn or get caught out
        after dark. But that’s not all! Solar Watch also provides
        up-to-the-minute weather information, so you’re always prepared for
        whatever Mother Nature throws your way. Whether you’re scaling mountains
        or exploring serene trails, Solar Watch is your essential guide to
        making every hike safe, enjoyable, and unforgettable. 
      </p>
    </div>
  );
}

export default About;