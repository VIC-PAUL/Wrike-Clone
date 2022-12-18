import React from "react";
import Header from "../components/Header";
import ContentHomePage from "../components/ContentHomePage";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <section
        style={{
          color: "white",
          backgroundColor: "#181f38",
          position:"sticky",
          top:0,
          zIndex:20
          // height:"500px"
        }}
      >
        <Header />
      </section>
      <section style={{
        backgroundColor:"#ebf5f3"
      }}>
        <ContentHomePage />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Homepage;
