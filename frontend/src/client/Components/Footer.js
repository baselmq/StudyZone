import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-center main_footer text-white">
        <div className="container p-4 pb-0">
          <p className="d-flex justify-content-center align-items-center">
            <img
              src="../Images/logo-white-removebg.png"
              alt="..."
              height={"12%"}
              width={"12%"}
              className="footer_logo"
            />
            <span className="slogan_footer">
              <span>Empower Your Mind, Expand Your Horizons!</span>
            </span>
          </p>
        </div>
        <p>Subscribe to get our Newsletter</p>
        <div className="container  pb-0">
          <section className="">
            <p className="d-flex justify-content-center align-items-center gap-3">
              <input
                type="text"
                id="subscribe_input"
                placeholder=" Your Email"
              />
              <button
                className="btn btn-secondary "
                id="btn_subscribe"
                type="button"
              >
                Subscribe
              </button>
            </p>
          </section>
        </div>
        <div className="container p-4 pb-0">
          <section className="">
            <p className="d-flex justify-content-center align-items-center gap-3">
              <span>Careers</span>
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
            </p>
          </section>
        </div>

        <div className="text-center ">© 2023 Class Technologies Inc.</div>
      </footer>
      {/* /footer */}
    </div>
  );
};

export default Footer;
