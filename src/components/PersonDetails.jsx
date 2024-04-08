import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";


const PersonDetails = () => {
    document.title = "Movie-Hub | Person Details";

    
    const navigate = useNavigate();
    const { id } = useParams();
    const { info } = useSelector((state) => state.person);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncloadperson(id));
        return () => {
            dispatch(removeperson());
        };
    }, [id]);

    return info ? (
        <div className="px-[10%] w-screen h-screen bg-[#1F1E24] ">
            {/* Part 1 navigation */}
            <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-2xl ">
                <Link
                    onClick={() => navigate(-1)}
                    className="hover:text-[yellow] ri-arrow-left-line"
                ></Link>
            </nav>

            <div className="w-full flex ">
                {/* Part 2 left Poster and Details */}
                <div className="w-[50%] ">
                <h1 className="text-6xl text-zinc-400 font-black my-5">
                        {info.detail.name}
                    </h1>
                   <div className="flex gap-20">
                   <img
                        className="rounded-md shadow-[8px_17px_38px_2px_rgba(0,0,0,.9)] h-[55vh] w-[35vh] object-cover"
                        src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
                        alt=""
                    />


           

                       {/* Personal Information */}
               <div className="flex flex-col">
               <h1 className="text-2xl text-zinc-400 font-semibold my-5">
                        Person Info
                    </h1>

                   <div className="">
                   <h1 className="text-lg text-zinc-400 font-semibold ">
                        Known For
                    </h1>
                    <h1 className=" text-zinc-400 ">
                        {info.detail.known_for_department}
                    </h1>

                    <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
                        Gender
                    </h1>
                    <h1 className=" text-zinc-400 ">
                        {info.detail.gender === 2 ? "Male" : "Female"}
                    </h1>

                    <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
                        Birthday
                    </h1>
                    <h1 className=" text-zinc-400 ">{info.detail.birthday}</h1>

                    <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
                        Deathday
                    </h1>
                    <h1 className=" text-zinc-400 ">
                        {info.detail.deathday
                            ? info.detail.deathday
                            : "Still Alive"}
                    </h1>

                    <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
                        Place Of Birth
                    </h1>
                    <h1 className=" text-zinc-400 ">
                        {info.detail.place_of_birth}
                    </h1>
                   </div>
               </div>

                   </div>


                    <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
                   
                   
               
                </div>

                {/* Part 3 right Details and information  */}
                <div className="w-[50%] ml-[5%] overflow-y-hidden">
                    {/* <h1 className="text-6xl text-zinc-400 font-black my-5">
                        {info.detail.name}
                    </h1> */}

                    <h1 className="text-xl mt-10 text-zinc-400 font-semibold ">
                        Biography
                    </h1>
                    <p className="text-zinc-400 mt-3 ">
                        {info.detail.biography.slice(0,1300)}
                    </p>
                   
                         {/* Sosial Media Links */}

                         <div className="text-2xl text-white flex gap-x-5 mt-5">
                        <a
                            target="_blank"
                            href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
                        >
                            <i className="ri-earth-fill"></i>
                        </a>

                        <a
                            target="_blank"
                            href={`https://www.facebook.com/${info.externalid.facebook_id}`}
                        >
                            <i className="ri-facebook-circle-fill"></i>
                        </a>

                        <a
                            target="_blank"
                            href={`https://www.instagram.com/${info.externalid.instagram_id}`}
                        >
                            <i className="ri-instagram-fill"></i>
                        </a>
                        <a
                            target="_blank"
                            href={`https://twitter.com/${info.externalid.twitter_id}`}
                        >
                            <i className="ri-twitter-x-fill"></i>
                        </a>
                    </div>
                   
                </div>

                   

            </div>
        </div>
    ) : (
        <Loading />
    );
};

export default PersonDetails;

