import React from "react";
import "./Home.css";
import { Banner } from "../Banner";
import { Input } from "../Input";
import { Reason } from "../Reason";
import { HealthRisk } from "../HealthRisk";

import { TestHabit } from "../TestHabit";
import { LiveData } from "../LiveData";
import { Gallery } from "../Gallery";
import { Testimonial } from "../Testimonial";
import { HealthPackages } from "../HealthPackages";
import mock from "../../mock.json";

const Home = () => {
  return (
    <div className="home">
      <Banner {...mock.Banner} />
      <Input {...mock.Input} />
      <HealthPackages {...mock.HealthPackages} />
      <Reason {...mock.Reason} />
      <HealthRisk {...mock.HealthRisk} />
      <TestHabit {...mock.TestHabit} />
      <LiveData />
      <Gallery {...mock.Gallery} />
      <Testimonial {...mock.Testimonial} />
    </div>
  );
};

export default Home;
