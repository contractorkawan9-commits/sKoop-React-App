import React from "react";
import "./Home.css";

/**
 * Home page component.
 * Serves as the landing page, introducing the brand with a welcome message
 * and showcasing various ice cream flavors through images.
 */
export function Home() {
  return (
    <>
      <div className="mainContent">
        {/* Welcome message section */}
        <div className="welcomeLine">
          <a>
            At <span className="brandFont">sKoop& wHoop</span>, we believe the
            best flavor in the world isn't found in a recipe book—it’s found in
            your favorite memories. Whether it’s the comfort of a classic
            vanilla or a daring combination you’ve only ever dreamed of, we are
            here to bring it to life. We don’t just serve ice cream; we provide
            the canvas for your culinary masterpiece. So, come in, grab a spoon,
            and let’s sKoop up a moment that belongs entirely to you.
          </a>
        </div>

        {/* Image showcase section for flavors */}
        <div className="bodyImgContainer">
          <div>
            <img
              className="flavoursImg"
              src="/flavoursImg/flavour1.webp"
              alt="Flavour 1"
            />
          </div>

          <div>
            <img
              className="flavoursImg"
              src="/flavoursImg/flavour2.webp"
              alt="Flavour 2"
            />
          </div>
        </div>

        {/* Additional image showcase section */}
        <div className="bodyImgContainer">
          <div>
            <img
              className="flavoursImg"
              src="/flavoursImg/flavour3.webp"
              alt="Flavour 3"
            />
          </div>

          <div>
            <img
              className="flavoursImg"
              src="/flavoursImg/flavour4.webp"
              alt="Flavour 4"
            />
          </div>
        </div>
      </div>

      <div className="bottomSpace"></div>
    </>
  );
}
