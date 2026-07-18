import React from "react";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import {Link} from 'react-router'

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    total_view,
    rating,
    id
  } = news;


  return (
    <div className="card bg-base-100 shadow-md mx-3">

      {/* Header */}

      <div className="flex justify-between items-center bg-base-200 p-4">

        <div className="flex items-center gap-3">
          <img
            src={author.img}
            className="w-12 h-12 rounded-full"
            alt=""
          />

          <div>
            <h2 className="font-bold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-4 text-xl">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </div>

      {/* Body */}

      <div className="card-body">

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <img
          src={image_url}
          className="rounded-xl h-64 object-cover"
          alt=""
        />

        <p className="text-gray-600 mt-3">
          {details.slice(0, 180)}...
        </p>

        <Link to={`/news-details/${id}`} className="text-orange-500 font-bold w-fit">
          Read More
        </Link>

        <div className="divider"></div>

        {/* Footer */}

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-2">

            <FaStar className="text-orange-400" />
            <FaStar className="text-orange-400" />
            <FaStar className="text-orange-400" />
            <FaStar className="text-orange-400" />
            <FaStar className="text-orange-400" />

            <span>{rating.number}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaEye />
            <span>{total_view}</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default NewsCard;