import React from "react";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <section>
          <Header></Header>
        </section>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
        <section className="w-11/12 mx-auto">
            <Navbar></Navbar>
        </section>
      </header>
      <main>
        <section className="left-nav"></section>
        <section className="main"></section>
        <section className="right-nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
