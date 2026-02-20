import React from "react";
import { offersData } from "../../data/siteData";
import "./Offers.css";

/**
 * Offers page component.
 * Displays a list of special offers fetched from `siteData.js`.
 * Each offer card shows an image, name, description, and an "Add offer" button.
 */
export function Offers() {
  return (
    <div className="mainContent">
      {offersData.map((offer, index) => (
        // Offers Container for each individual offer
        <div className="offersContainer" key={offer.id || index}>
          {/* Image Wrapper for the offer image */}
          <div className="imageWrapper">
            <img
              className="offersImage"
              src={offer.image}
              alt={offer.name}
            />
          </div>

          {/* Offer Text and Call to Action */}
          <div className="offerText">
            <p className="offersMessage">{offer.name}</p>
            <p className="offersSubMessage">{offer.description}</p>

            <button className="offerButton">Add offer</button>
            <p className="offersTerms">
              *Offer valid at participating sKoop locations only. Cannot be
              combined with other discounts or loyalty rewards. Prices subject
              to change without notice. See store for details.
            </p>
          </div>
        </div>
      ))}

      <div className="bottomSpace"></div>
    </div>
  );
}
