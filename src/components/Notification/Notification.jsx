import css from "./Notification.module.css";

function Notification({ message }) {
  return <p className={css.feedbackMessage}>{message}</p>;
}

export default Notification;
