import React from 'react';
import { flavoursData } from "../../data/siteData";
import "./Flavours.css";

/**
 * Flavours page component.
 * Displays a grid of ice cream flavors fetched from `siteData.js`.
 * Each flavor card shows an image and the name of the flavor.
 */
export function Flavours() {
  return (
    <>
      <div className="mainContent">
        <div className="flavoursGrid">
          {flavoursData.map((flavour) => (
            <div key={flavour.id} className="flavourCard">
              <img className="flavoursImg" src={flavour.image} alt={flavour.name} />
              <p className="flavourName">{flavour.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
