import React from "react";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar/Navbar";
import LeftAside from "../components/HomeLayout/LeftAside/LeftAside";
import { Outlet, useNavigation } from "react-router";
import RightAside from "../components/HomeLayout/RightAside/RightAside";
import LoadingPage from "../pages/LoadingPage/LoadingPage";

const HomeLayout = () => {
  const {state}=useNavigation()
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
      <main className="w-11/12 mx-auto my-5 grid grid-cols-12">
        <section className="left-nav col-span-3 sticky top-0 h-fit">
            <LeftAside></LeftAside>
        </section>
        <section className="main col-span-6">
            {state=="loading"? <LoadingPage></LoadingPage>: <Outlet></Outlet>}
        </section>
        <section className="right-nav col-span-3 sticky top-0 h-fit">
            <RightAside></RightAside>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
