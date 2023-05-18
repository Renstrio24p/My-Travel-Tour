import React from "react";

export default function TravelCard(props){
    return (
        <div className="travel-card">
            <img src={props.imageUrl} alt="a landscape picture" className="image" />
            <div className="card-content">
                    <p className="card-location">
                        <i className={props.icon}></i>
                         {props.location} 
                         <a href="#0" className="location">View on Google Maps</a>
                     </p>       
                <h1 className="title">{props.title}</h1>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}