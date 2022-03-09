import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section class="contact">
      <div class="contect_div">
        <div class="d-flex flex-column align-items-center">
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            nesciunt at vitae.
          </p>
        </div>
        <div class="inputes d-flex flex-column align-items-center">
          <input type="name" placeholder="Name" class="input  p-3 m-3" />
          <input type="name" placeholder="Email" class="input p-3 m-3" />
          {/* <textarea
            class="form-control m-3   message"
            placeholder="Message"
            style="padding-bottom: 180px; padding-top: 20px; padding-left: 20px; font-size: 1.5rem; border-radius: 10px; width: 60%;"
          ></textarea> */}
          <button class="submit_button">Submit</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
