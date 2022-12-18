import React from "react";
import Header from "../components/Header";
import ContentHomePage from "../components/ContentHomePage";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <section
        
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
