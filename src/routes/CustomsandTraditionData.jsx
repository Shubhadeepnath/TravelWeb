function CustomsandTraditionData(props) {
  return (
    <div className={props.className}>
      <div className="customText">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
        <a
          className="customlink"
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.newlinktext} <span>&#10230;</span>
        </a>
      </div>
      <div className="customimage">
        <img src={props.img1} />
      </div>
    </div>
  );
}

export default CustomsandTraditionData;
