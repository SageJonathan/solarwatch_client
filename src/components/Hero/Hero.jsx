import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <p className="hero__header">Your Ultimate Hiking Companion</p>
      <p className="hero__subheader">
        Plan perfect hikes with precise sunrise and sunset times.
      </p>
      <p className="hero__subheader hero__subheader--bottom">
        Stay prepared with up-to-the-minute weather updates.
      </p>
    </div>
  );
}

export default Hero;
