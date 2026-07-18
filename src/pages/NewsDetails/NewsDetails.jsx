import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Header from "../../components/Header/Header";
import RightAside from "../../components/HomeLayout/RightAside/RightAside";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [news, setNews] = useState({});
  console.log(id, news);
  useEffect(() => {
    const findNewsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(findNewsDetails);
    console.log(news);
  }, [data, id]);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className=" w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9 border p-5 border-gray-100 rounded-2xl">
          <h2 className="font-semibold">Dragon News</h2>
          <div className="space-y-5">
            <img
              className="w-full h-[400px] object-cover"
              src={news.image_url}
              alt=""
            />
            <h2 className="font-bold">{news.title}</h2>
            <p className="text-justify">{news.details}</p>
            <button className="btn btn-secondary">
              <Link to={`/category/${news.category_id}`} className="flex items-center gap-3">
                <span>
                  <FaArrowLeftLong />
                </span>
                <span> All news in this category</span>
              </Link>
            </button>
          </div>
        </section>
        <section className="col-span-3">
          <RightAside></RightAside>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
