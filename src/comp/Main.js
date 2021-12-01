import React from "react";
import Pointer from "./pount.png";

export default function main(prop) {
  console.log(prop);
  return (
    <div id="main-con">
      <div id="image-con">
        <img alt="Loll" src={prop.imageUrl} />
      </div>
      <div id="att">
        <div id="st">
          <div>
            <img id="pointer" alt="d" src={Pointer} />
            {prop.location}{" "}
          </div>
          <p>
            <a href={prop.googleMapsUrl}>views on google maps</a>
          </p>
        </div>

        <h2>{prop.title}</h2>

        <h3>
          {prop.startDate} - {prop.endDate}
        </h3>

        <p>{prop.description}</p>
      </div>
      <hr />
    </div>
  );
}
