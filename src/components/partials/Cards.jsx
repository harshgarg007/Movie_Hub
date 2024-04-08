import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const Cards = ({ data, title }) => {
    return (
      <div className="flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24] mt-5">
        <Link
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="fixed bottom-[5%] right-[5%] flex justify-center items-center w-[5vh] h-[5vh] bg-[#6556cd] rounded-lg"
        >
          <i className="text-white ri-arrow-up-line text-xl"></i>
        </Link>
        {data.map((c, i) => (
          <Link
            to={`/${c.media_type || title}/details/${c.id}`}
            className="relative w-[25vh] mr-[5%] mb-[5%] "
            key={i}
          >
            <img
              className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.9)] h-[40vh] object-cover rounded-lg"
  
              src={
                c.poster_path || c.backdrop_path || c.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      c.poster_path || c.backdrop_path || c.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <h1 className="text-2xl text-zinc-300 mt-3 font-semibold ">
              {c.name || c.title || c.original_name || c.original_title}
            </h1>
  
            {c.vote_average && (
               <CircularProgressbar
               value={c.vote_average}
               maxValue={10}
               text={(c.vote_average).toFixed(1)}
               styles={buildStyles({
                   pathColor:
                       c.vote_average < 5 ? "red" : c.vote_average < 7 ? "orange" : "green",
                      textColor: "white",
                      textSize: "35px",
                      pathTransition: "none",
               })} 
               className="w-[45px] absolute top-[68%] left-[88%] font-semibold " 
            />
            )}
          
          </Link>
        ))}
      </div>
    );
  };
  
  export default Cards;