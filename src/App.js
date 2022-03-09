import React from "react";
import {
  Header,
  About,
  Blog1,
  Blog2,
  Blog3,
  Sponser,
  Contact,
  Footer,
} from "./components";

const App = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <About />
      <Blog1 />
      <Blog2 />
      <Blog3 />
      <Sponser />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
