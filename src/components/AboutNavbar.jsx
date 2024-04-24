import React, { useState, useEffect } from "react";
import "./AboutNavbarStyles.css";
import CustomsandTraditionData from "../routes/CustomsandTraditionData";
import culture from "../assets/culture.jpg";
import "../routes/CustomandTraditionStyle.css";
import OldUdaipur from "../assets/oldUdaipur.jpg";
import Art from "../assets/art.jpg";

function AboutNavbar() {
  const [activeSection, setActiveSection] = useState("");
  const sections = [
    "customs-and-traditions",
    "history-of-tripura",
    "tripuri-art-and-culture",
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      const target = document.getElementById(section);
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return (
    <div className="aboutnavbarcontainer">
      <div class="middle-navbar">
        <ul className="aboutnavbarlist">
          <li id="aboutnavbarlistitem">
            <a
              id="buttonactive"
              href="#customs-and-traditions"
              className={
                activeSection === "customs-and-traditions" ? "active" : ""
              }
            >
              CUSTOMS AND TRADITIONS
            </a>
          </li>
          <li id="aboutnavbarlistitem">
            <a
              id="buttonactive"
              href="#history-of-tripura"
              className={activeSection === "history-of-tripura" ? "active" : ""}
            >
              HISTORY OF TRIPURA
            </a>
          </li>
          <li id="aboutnavbarlistitem">
            <a
              id="buttonactive"
              href="#tripuri-art-and-culture"
              className={
                activeSection === "tripuri-art-and-culture" ? "active" : ""
              }
            >
              TRIPURI ART AND CULTURE
            </a>
          </li>
        </ul>
      </div>

      <section id="customs-and-traditions">
        <CustomsandTraditionData
          className="firstCustom"
          heading="CUSTOMS AND TRADITIONS"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          newlinktext="Read more"
          img1={culture}
        />
      </section>
      <section id="history-of-tripura">
        <CustomsandTraditionData
          className="firstCustom-reverse"
          heading="HISTORY OF TRIPURA"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          newlinktext="Read more"
          img1={OldUdaipur}
        />
      </section>
      <section id="tripuri-art-and-culture">
        <CustomsandTraditionData
          className="firstCustom"
          heading="TRIPURI ART AND CULTURE"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          newlinktext="Read more"
          img1={Art}
        />
      </section>
    </div>
  );
}

export default AboutNavbar;
