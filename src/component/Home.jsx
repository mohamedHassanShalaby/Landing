import React from "react";
import group from '../images/Group.png';
const Home = () => {
  return (
    <section>
      <div className="container">
        <div className="text">
          <h2>Introduce Your Product Quickly & Effectively</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <button>Purchase UI Kit</button>
          <button>Learn More</button>
        </div>
        <div className="image">
          <img src={group} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
