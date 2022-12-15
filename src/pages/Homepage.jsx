import React from "react";
import Header from "../components/Header";
import ContentHomePage from "../components/ContentHomePage";

const Homepage = () => {
  return (
    <div 
    // className="border border-red-500 m-auto"
    style={{
      // border:"1px solid red",
      margin:"auto"
    }}
    >
      <section style={{
        color:"white",
        backgroundColor:"#181f38",
        // height:"500px"
      }}>
        <Header />
      </section>
      <section>
        <ContentHomePage />
      </section>

    </div>
  );
};

export default Homepage;
