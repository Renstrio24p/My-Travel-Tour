import React from "react";
import NavTravel from "./components/Navbar";
import TravelHero from "./components/Hero";

export default function TravelJournal(){
    return (
        <div className="Page">
            <NavTravel />
            <TravelHero />
        </div>
    )
}