import css from "./Feedback.module.css";

function Feedback({ good, neutral, bad }) {
  return (
    <div className={css.feedback}>
      <ul className={css.feedbackList}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
    </div>
  );
}

export default Feedback;
