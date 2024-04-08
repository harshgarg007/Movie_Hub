import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

const HorizontalCards = ({ data }) => {

    return (
  
        <div className="w-full flex justify-between overflow-x-auto scroll-smooth pl-5 pb-3 mt-4  ">
          {data.map((d, i) => (
            <Link to={`/${d.media_type}/details/${d.id}`} key={i} className="min-w-[15%] h-[38vh] mr-5 shadow-lg bg-zinc-800 rounded-lg ">
              <img
                 src={
                  d.backdrop_path || d.poster_path
                      ? `https://image.tmdb.org/t/p/original${
                            d.backdrop_path || d.poster_path
                        }`
                      : noimage
              }
                alt=""
                className="w-full h-[105px] object-cover"
              />
  
              <div className="text-white">
                <h1 className="text-lg mt-2 font-semibold pl-1 ">
                  {(d.title || d.name || d.original_title || d.original_name).slice(0,16)}
                </h1>
                <p className="mt-3 font-normal pl-1 ">
                  {d.overview.slice(0, 70)}...
                  <span className="text-yellow-300">more</span>
                </p>
               
              </div>
            </Link>
          ))}
        </div>
     
    );
  };
  
  export default HorizontalCards;
