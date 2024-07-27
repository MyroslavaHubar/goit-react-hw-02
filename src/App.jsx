import { useState } from "react";
import "./App.css";
import Section from "./components/Section/Section";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const counterFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  return (
    <>
      <Section>
        <Description
          title="Sip Happens Café
"
        >
          Please leave your feedback about our service by selecting one of the
          options below.
        </Description>
        <Options buttons={["Good", "Neutral", "Bad"]}></Options>

        <Feedback
          good={counterFeedback.good}
          neutral={counterFeedback.neutral}
          bad={counterFeedback.bad}
        ></Feedback>
      </Section>
    </>
  );
}

export default App;
