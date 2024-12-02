import React from "react";
import { FaHouseUser } from "react-icons/fa";
import mobileImg from "../images/mobile_login_ikmv.svg";
import happy from "../images/undraw_happy_news_hxmt.png";
import social from "../images/undraw_social_influencer_sgsv.png";
const Powerfull = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="text">
            <h2>Light, Fast & Powerfull</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <div className="icons">
              <div className="icon">
                <FaHouseUser />
                <h3>Title Goes Here</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.{" "}
                </p>
              </div>
              <div className="icon">
                <FaHouseUser />
                <h3>Title Goes Here</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={mobileImg} alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="image">
            <img src={happy} alt="" />
          </div>
          <div className="info">
            <h2>Light, Fast & Powerfull</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="image">
            <img src={social} alt="" />
          </div>
          <div className="info">
            <h2>Light, Fast & Powerfull</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Powerfull;
