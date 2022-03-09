import React from "react";
import "./blog2.css";
import logo from "../../assets/invite.png";

const Blog2 = () => {
  return (
    <section class="blog blog_number_2">
      <div class="blog_div d-flex blog_2">
        <div class="blog_message">
          <h2 class="blog_heading fs-1">Lorem ipsum dolor sit</h2>
          <p class="blog_para">
            <p class="lead para fs-4">
              Dolor sit amet consectetur adipiscing elitdu is tristique.
              Vestibulum
            </p>
            <button class="rounded-pill p-3 px-5 mt-5 fs-4">Contact Us</button>
          </p>
        </div>
        <div class="blog_img_div">
          <img src={logo} alt="" class="blog_img" />
        </div>
      </div>
    </section>
  );
};

export default Blog2;
