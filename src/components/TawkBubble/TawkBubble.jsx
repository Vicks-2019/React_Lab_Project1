import React from "react";
import "./TawkBubble.css";

const TawkBubble = () => {
  return (
    <div className="tawk">
      <i
        role="button"
        tabindex="0"
        data-text="Close"
        aria-label="Close"
        class="tawk-icon tawk-icon-close tawk-icon-small"
      ></i>
      <img
        src="https://embed.tawk.to/_s/v4/assets/images/attention-grabbers/2-r-cr.svg"
        alt="Chat attention grabber"
        style="width: 100px; height: 87px;"
      ></img>
    </div>
  );
};

export default TawkBubble;
