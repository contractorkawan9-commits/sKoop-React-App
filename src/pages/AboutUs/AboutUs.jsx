import React from "react";
import "./AboutUs.css";

/**
 * AboutUs page component.
 * Displays information about the sKoop & wHoop brand, its story, and philosophy.
 * Features engaging text and imagery to convey the brand's message.
 */
export function AboutUs() {
  return (
    <div className="aboutUsPage">
      <div className="aboutCointainer1">
        <div className="aboutImageContainer">
          <img
            className="aboutImage"
            src="/flavoursImg/flavour2.webp"
            alt="story behind the brand"
          />

          <hr className="horizontalLine" />

          <img
            className="aboutImage"
            src="/flavoursImg/flavour3.webp"
            alt="Second scoop of ice cream"
          />
        </div>

        <div className="vertical-line"></div>

        <div className="aboutText">
          <p>
            Welcome to <span className="brandFont">sKoop & wHoop</span>, where
            every scoop is a celebration of your unique imagination. We started
            with a simple belief: the best dessert in the world isn’t found in a
            dusty recipe book—it is found in your favorite memories and your
            wildest cravings. We don’t just serve premium ice cream; we provide
            the blank canvas for your culinary masterpiece, inviting you to
            unleash your inner chef with every visit. Whether you are craving
            the nostalgic comfort of a classic vanilla bean or the thrill of a
            daring new combination, we are here to bring those dreams to life.
            Our shop is a place where craft meets play, and where high-quality
            ingredients meet the joy of creation. We invite you to grab a spoon,
            join the fun, and sKoop up a moment that belongs entirely to you.
            Because at the end of the day, we aren't just making desserts—we are
            wHooping up happiness.
          </p>
        </div>
      </div>

      <div className="bottomSpace"></div>
    </div>
  );
}
