import classes from "./ErrorModal.module.css";
import Button from "./../General_ui/Button";
const ErrorModal = (props) => {
  return (
    <div className={classes["error-modal"]}>
      <h2>Invalid Input</h2>
      <div>
        <p>{props.message}</p>
        <Button type="button" text="Okay" onClick={props.onModalClose} />
      </div>
    </div>
  );
};

export default ErrorModal;
