import React from "react";
import Header from "../../components/Header";
import Title from "../../components/Landing/Title";
import ChoiceYourCourse from "../../components/Landing/ChoiceYourCourse";
import WhyPromptTheFuture from "../../components/Landing/WhyPromptTheFuture";
import Hackathons from "../../components/Landing/Hackathons";

const Landing = () => {
  return (
    <>
      <Header />
      <Title />
      <ChoiceYourCourse />
      <WhyPromptTheFuture />
      <Hackathons />
    </>
  );
};

export default Landing;
