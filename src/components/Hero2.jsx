import "./Hero2Styles.css";

function Hero2(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="HeroVid" src={props.hero2Vid} />

        <div className="heroText" loading="lazy">
          <h1>{props.title2}</h1>
          <p>{props.text2}</p>
          <a href={props.url2} className={props.btnClass2}>
            {props.buttonText2}
          </a>
        </div>
      </div>
    </>
  );
}
export default Hero2;
