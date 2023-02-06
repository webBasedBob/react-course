import classes from "./Overlay.module.css";

const Overlay = (props) => {
  const overlayClickHandler = (e) => {
    if (e.target.className !== "overlay") return;
    props.onModalClose();
  };
  return (
    <div onClick={overlayClickHandler} className={classes.overlay}>
      {props.children}
    </div>
  );
};

export default Overlay;
