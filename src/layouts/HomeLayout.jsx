import React from "react";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";


const HomeLayout = () => {
  return (
    <div>
      <header>
       <Header></Header>
       <LatestNews></LatestNews>
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
