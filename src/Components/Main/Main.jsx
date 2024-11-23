import React from "react";
import "./main.css";
import img from "../../Assets/img.png";
import img_2 from "../../Assets/img.png";
import img_3 from "../../Assets/img.png";
import img_4 from "../../Assets/img.png";
import img_5 from "../../Assets/img.png";
import img_6 from "../../Assets/img.png";
import img_7 from "../../Assets/img.png";
import img_8 from "../../Assets/img.png";
import img_9 from "../../Assets/img.png";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Agadir",
    location: "Morroco",
    grade: "CULTURE RELAX",
    fees: "7000 DH",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: 2,
    imgSrc: img_2,
    destTitle: "Agadir",
    location: "Morroco",
    grade: "CULTURE RELAX",
    fees: "5000 DH",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: 3,
    imgSrc: img_3,
    destTitle: "Agadir",
    location: "Morroco",
    grade: "CULTURE RELAX",
    fees: "7000 DH",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: 4,
    imgSrc: img_4,
    destTitle: "Agadir",
    location: "Morroco",
    grade: "CULTURE RELAX",
    fees: "7000 DH",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: 5,
    imgSrc: img_5,
    destTitle: "Agadir",
    location: "Morroco",
    grade: "CULTURE RELAX",
    fees: "7000 DH",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: 6,
    imgSrc: img_6,
    destTitle: "Marrakech",
    location: "Morroco",
    grade: "CULTURE RELAX",
    fees: "7000 DH",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: 7,
    imgSrc: img_7,
    destTitle: "Essaouira",
    location: "Morroco",
    grade: "CULTURE RELAX",
    fees: "7000 DH",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: 8,
    imgSrc: img_8,
    destTitle: "Taza",
    location: "Morroco",
    grade: "CULTURE RELAX",
    fees: "7000 DH",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: 9,
    imgSrc: img_9,
    destTitle: "Tanger",
    location: "Morroco",
    grade: "CULTURE RELAX",
    fees: "7000 DH",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited desinations</h3>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">
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
