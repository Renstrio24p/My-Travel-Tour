import React from "react";
import travelData from "./travel-data";
import TravelCard from "./travel-card"

export default function TravelHero(){
    const cards = travelData.map(loc => {
        return (
            <TravelCard 
                key={loc.id}
                {...loc}
            />
        )
    })   

    return (
        <div className="Hero">
           {cards}
        </div>
    )
}