import css from "./Options.module.css";

function Options({ updateFeedback, totalFeedback }) {
  return (
    <div className={css.options}>
      <button
        className={css.optionsButton}
        type="button"
        aria-label="Button good"
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.optionsButton}
        type="button"
        aria-label="Button neutral"
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.optionsButton}
        type="button"
        aria-label="Button bad"
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={css.optionsButton}
          type="button"
          aria-label="Button reset"
          onClick={() => updateFeedback("reset")}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
