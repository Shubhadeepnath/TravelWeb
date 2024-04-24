import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h1>TripuraQuest</h1>
            <p>WELCOME TO LAND OF LAKES AND PALACES</p>
          </div>
          <div>
            <a href="/">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h4>Project</h4>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
          </div>
          <div>
            <h4>Community</h4>
            <a href="/">Github</a>
            <a href="/">Twitter</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshoot</a>
          </div>
          <div>
            <h4>Others</h4>
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
          </div>
        </div>
      </div>

      <div className="footer2">
        <p>Designed & Developed By </p>
        &copy; Shubhadeep Nath
      </div>
    </>
  );
};
export default Footer;
