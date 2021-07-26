import React from "react";
import "./LiveData.css";
import VisibilitySensor from "react-visibility-sensor";

import CountUp from "react-countup";

const LiveData = () => {
  return (
    <div
      className="livedata"
      style={{
        background: "url(/assets/backlive.jpg)",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        marginTop: 2,
      }}
    >
      <div className="lvdata">
        <div className="countr">
          <i
            className=" countr-icon 
            fa
            fa-stethoscope"
            style={{ fontSize: 50, margin: 7 }}
          ></i>
          <br />
          <span>
            <CountUp end={2700} duration={5} redraw>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} style={{ fontSize: 30 }} />
                </VisibilitySensor>
              )}
            </CountUp>
          </span>
          <span>+</span>
          <h6 style={{ fontSize: 20 }}>TEST AVAILABLE</h6>
        </div>
        <div className="countr">
          <i
            className="countr-icon fa fa-medkit"
            style={{ fontSize: 50, margin: 7 }}
          ></i>
          <br />
          <span>
            <CountUp end={112890} duration={5} redraw>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} style={{ fontSize: 30 }} />
                </VisibilitySensor>
              )}
            </CountUp>
          </span>
          <span>+</span>
          <h6 style={{ fontSize: 20 }}>TEST DONE</h6>
        </div>
        <div className="countr">
          <i
            className="countr-icon fa fa-user-md"
            style={{ fontSize: 50, margin: 7 }}
          ></i>
          <br />
          <span style={{ fontSize: 30 }}>
            <CountUp end={98985} duration={5} redraw>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} style={{ fontSize: 30 }} />
                </VisibilitySensor>
              )}
            </CountUp>
          </span>
          <span>+</span>
          <h6 style={{ fontSize: 20 }}> DIET CONSULTATION</h6>
        </div>
        <div className="countr">
          <i
            className="countr-icon fa fa-users"
            style={{ fontSize: 50, margin: 7 }}
          ></i>
          <br />
          <span>
            <CountUp end={107245} duration={5} redraw>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} style={{ fontSize: 30 }} />
                </VisibilitySensor>
              )}
            </CountUp>
          </span>
          <span>+</span>
          <h6 style={{ fontSize: 20 }}>HAPPY CUSTOMERS</h6>
        </div>
      </div>
    </div>
  );
};

export default LiveData;
