import React from "react";
import "./blog1.css";
import logo from "../../assets/benefits.jpg";

const Blog1 = () => {
  return (
    <section class="blog">
      <div class="blog_div d-flex">
        <div class="blog_img_div">
          <img src={logo} alt="" class="blog_img" />
        </div>
        <div class="blog_message">
          <h2 class="blog_heading fs-1">Lorem ipsum dolor sit</h2>
          <p class="blog_para">
            <p class="lead para fs-4">
              Dolor sit amet consectetur adipiscing elitdu is tristique.
              Vestibulum
            </p>
            <p class="lead para fs-4">
              <span>praes ent semper</span> dolor sit amet nemi rane Venenatis
              consectetur adipiscing elit duist ristique. Vestibulum lect vira
              reg piriva
            </p>
            <p class="lead para fs-4">
              <span> Vitaenun turpis congue</span> mauris rhoncus aen ean vel
              elit interdum core ferise volo gerto
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog1;
