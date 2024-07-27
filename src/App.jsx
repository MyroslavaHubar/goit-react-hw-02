import { useState } from "react";
import "./App.css";
import Section from "./components/Section/Section";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [counterFeedback, setCounterFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function updateFeedback(feedbackType) {
    feedbackType !== "reset"
      ? setCounterFeedback({
          ...counterFeedback,
          [feedbackType]: counterFeedback[feedbackType] + 1,
        })
      : setCounterFeedback({
          good: 0,
          neutral: 0,
          bad: 0,
        });
  }

  const totalFeedback =
    counterFeedback.good + counterFeedback.neutral + counterFeedback.bad;
  const positiveFeedback = Math.round(
    (counterFeedback.good / totalFeedback) * 100
  );

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
        <Options
          updateFeedback={updateFeedback}
          totalFeedback={totalFeedback}
        ></Options>
        {totalFeedback === 0 ? (
          <Notification message="No feedback yet"></Notification>
        ) : (
          <Feedback
            good={counterFeedback.good}
            neutral={counterFeedback.neutral}
            bad={counterFeedback.bad}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          ></Feedback>
        )}
      </Section>
    </>
  );
}

export default App;
