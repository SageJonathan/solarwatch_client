import "./Footer.scss";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer__left">
          <a href="mailto:dev@sagecodes.tech" className="footer__text">
            Contact Support
          </a>
        </div>
        <div className="footer__center">
          <p className="footer__text">&copy; Solar Watch 2024</p>
        </div>
        <div className="footer__right">
          <a
            href="https://www.paypal.com/ncp/payment/97FLNPDTS4ECL"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__text"
          >
            Donate Today
          </a>
        </div>
      </section>
    </>
  );
}

export default Footer;

// suport link(left)
// donations link (right)
// Tradmark (middle)
