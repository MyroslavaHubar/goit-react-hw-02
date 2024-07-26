import css from "./Description.module.css";

function Description({ title, children }) {
  return (
    <div>
      <h1 className={css.title}>{title}</h1>
      <p className={css.text}>{children}</p>
    </div>
  );
}

export default Description;
