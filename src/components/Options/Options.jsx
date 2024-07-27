import css from "./Options.module.css";

function Options({ updateFeedback }) {
  return (
    <div className={css.options}>
      <button
        className={css.optionsButton}
        type="button"
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.optionsButton}
        type="button"
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.optionsButton}
        type="button"
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
    </div>
  );
}

export default Options;
