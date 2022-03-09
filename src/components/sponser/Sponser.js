import React from "react";
import "./sponser.css";
import { spo1, spo2, spo3, spo4, spo5 } from "./import";

const Sponser = () => {
  return (
    <section class="sponser">
      <div class="sponser_div">
        <div class="d-flex justify-content-center">
          <h1 class=" ">Lorem ipsum dolor.</h1>
        </div>
        <ul class="d-flex my-3 list-unstyled fs-3 text-light justify-content-md-center flex-wrap sponser_img_ul">
          <li class=" sponer_img_li">
            <img src={spo1} alt="" class="sponser_img" />
          </li>
          <li class="sponer_img_li">
            <img src={spo2} alt="" class="sponser_img" />
          </li>
          <li class="sponer_img_li">
            <img src={spo3} alt="" class="sponser_img" />
          </li>
          <li class="sponer_img_li">
            <img src={spo4} alt="" class="sponser_img" />
          </li>
          <li class="sponer_img_li">
            <img src={spo5} alt="" class="sponser_img" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sponser;
