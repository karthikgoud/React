import React from "react";

export default function Card(props) {
  return (
    <div className="content-section">
      <img className="card-img" src={props.item.imageUrl} />
      <div className="card-content">
        <div className="location-div">
          <p className="country">{props.item.location}</p>
          <p className="maps">
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </p>
        </div>
        <h1 className="title">{props.item.title}</h1>
        <h4 className="date">
          {props.item.startDate}-{props.item.endDate}
        </h4>
        <p className="about">{props.item.description}</p>
      </div>
    </div>
  );
}
