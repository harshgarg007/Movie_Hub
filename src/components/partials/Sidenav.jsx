import axios from "../../utils/axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
    return (
        <div className="w-[20%] h-full  border-r-2 border-zinc-400 p-10">
            <h1 className="text-2xl text-white font-bold">
                <i className="text-[#6556CD] ri-tv-fill mr-4 text-3xl"></i>
                <span className="text-2xl">Movie-Hub</span>
            </h1>
            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-2xl mt-10 mb-5">
                    New Feeds
                </h1>
                <Link
                    to="/trending"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
                >
                    <i className="ri-fire-fill"></i> Trending
                </Link>
                <Link
                    to="/popular"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
                >
                    <i className="mr-2 ri-bard-fill"></i>
                    Popular
                </Link>
                <Link
                    to="/movie"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
                >
                    <i className="mr-2 ri-movie-2-line"></i>
                    Movies
                </Link>
                <Link
                    to="/tv"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
                >
                    <i className="mr-2 ri-tv-line"></i>
                    Tv Shows
                </Link>
                <Link
                    to="/person"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
                >
                    <i className="mr-2 ri-team-fill"></i>
                    People
                </Link>
            </nav>
            <hr className="border-none h-[1px] mt-2 bg-zinc-400" />
            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-xl mt-10 mb-5">
                    Website Information
                </h1>
                <Link to="/about" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
                    <i className="mr-2 ri-information-fill"></i> About
                </Link>
                <Link to='/contact' className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
                    <i className="mr-2 ri-phone-fill"></i>
                    Contact Us
                </Link>
            </nav>
        </div>
    );
};

export default Sidenav;