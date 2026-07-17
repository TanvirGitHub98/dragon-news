import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../components/NewsCard/NewsCard";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true,
      );
      setCategoryNews(filterNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [data, id]);
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Total News: {categoryNews.length}</h2>

      {categoryNews.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
};

export default CategoryNews;
