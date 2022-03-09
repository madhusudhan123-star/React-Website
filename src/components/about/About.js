import React from "react";
import "./about.css";

const About = () => {
  return (
    <section class="services">
      <div class="services_div">
        <div class="w-100 d-flex justify-content-center">
          <h2 class="second-heading font-weight-light">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua remva
          </h2>
        </div>
        <div class="cards_div cards d-flex justify-content-around mx-5">
          <div class="card selected_card text-center border-0">
            <i class="fas fa-rocket card-img-top"></i>
            <div class="card-body">
              <p class="card-text fs-3 font-weight-bold">
                Lorem ipsum dolor sitreva amet consectet adipiscing elitse
              </p>
            </div>
          </div>
          <div class="card selected_card text-center border-0">
            <i class="fas fa-cloud card-img-top"></i>
            <div class="card-body">
              <p class="card-text fs-3 font-weight-bold">
                Lorem ipsum dolor sitreva amet consectet adipiscing elitse
              </p>
            </div>
          </div>
          <div class="card selected_card text-center border-0">
            <i class="fas fa-server card-img-top"></i>
            <div class="card-body">
              <p class="card-text fs-3 font-weight-bold">
                Lorem ipsum dolor sitreva amet consectet adipiscing elitse
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
