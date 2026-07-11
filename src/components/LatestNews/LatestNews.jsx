import React from "react";
import FromMarquee from "react-fast-marquee";

// যদি অবজেক্ট আসে তবে তার ভেতর থেকে .default অথবা মেইন অবজেক্টটি নিয়ে নেওয়া
const Marquee = FromMarquee.default || FromMarquee;

const LatestNews = () => {
  return (
    <div className="flex items-center gap-2 bg-base-200 p-3 my-3">
      <p className="bg-secondary text-base-100 px-3 py-2">Latest</p>
      <Marquee pauseOnHover={true} >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          reprehenderit ipsam consequuntur fugit provident optio ad nostrum rem
          eligendi omnis laudantium nisi eos consequatur iure ipsa, earum
          numquam aspernatur a!
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
