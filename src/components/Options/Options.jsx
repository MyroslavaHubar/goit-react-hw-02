import css from "./Options.module.css";

function Options({ buttons }) {
  return (
    <div className={css.options}>
      {buttons.map((buttonName) => {
        return (
          <button className={css.optionsButton} key={buttonName}>
            {buttonName}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
