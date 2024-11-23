import React from "react";
import "./footer.css";
import videoF from "../../Assets/video-3.mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={videoF} muted autoPlay loop type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Turn World.
              </a>
            </div>
            <div className="footerParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s.
            </div>
            <div className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            {/* Group One */}
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
            {/* Group two */}
            <div className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Hostelworld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>
            {/* Group three */}
            <div className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agadir
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tanger
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rabat
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Marrakech
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Essaouira
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THERE</small>
            <small>COPYRIGHTS RESERVED - Turn World 2024</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
