import React, { useEffect } from "react";
import "./main.css";
import img from "../../Assets/agadir.jpg";
import img_2 from "../../Assets/marrakech.jpg";
import img_3 from "../../Assets/Essaouira.jpg";
import img_4 from "../../Assets/Casablanca.jpg";
import img_5 from "../../Assets/ifrane.jpg";
import img_6 from "../../Assets/Tanger.jpg";
import img_7 from "../../Assets/rabat.jpg";
import img_8 from "../../Assets/tiznit.jpg";
import img_9 from "../../Assets/tafraoute.jpg";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Agadir",
    location: "Morroco",
    grade: "CULTURE RELAX",
    fees: "6999 DH",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: 2,
    imgSrc: img_2,
    destTitle: "Marrakech",
    location: "Morroco",
    grade: "CULTURE RELAX",
    fees: "4999 DH",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: 3,
    imgSrc: img_3,
    destTitle: "Essaouira",
    location: "Morroco",
    grade: "CULTURE RELAX",
    fees: "6499 DH",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: 4,
    imgSrc: img_4,
    destTitle: "Casablanca",
    location: "Morroco",
    grade: "CULTURE RELAX",
    fees: "6499 DH",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: 5,
    imgSrc: img_5,
    destTitle: "Ifrane",
    location: "Morroco",
    grade: "CULTURE RELAX",
    fees: "7499 DH",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: 6,
    imgSrc: img_6,
    destTitle: "Tanger",
    location: "Morroco",
    grade: "CULTURE RELAX",
    fees: "4499 DH",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: 7,
    imgSrc: img_7,
    destTitle: "Rabat",
    location: "Morroco",
    grade: "CULTURE RELAX",
    fees: "8499 DH",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: 8,
    imgSrc: img_8,
    destTitle: "Tiznit",
    location: "Morroco",
    grade: "CULTURE RELAX",
    fees: "3999 DH",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: 9,
    imgSrc: img_9,
    destTitle: "Tafraoute",
    location: "Morroco",
    grade: "CULTURE RELAX",
    fees: "3499 DH",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited desinations
        </h3>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
