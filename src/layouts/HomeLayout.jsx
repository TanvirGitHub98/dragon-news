import React from "react";
import logo from "../assets/logo.png";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <div className="flex justify-center items-center flex-col gap-3 mt-3">
          <img className="w-[450px]" src={logo} alt="header Logo" />
          <p>Journalism Without Fear or Favour</p>
        </div>
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
