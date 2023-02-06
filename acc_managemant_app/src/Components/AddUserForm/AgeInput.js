import classes from "./AgeInput.module.css";

const AgeInput = (props) => {
  const handleInputChange = (e) => {
    props.onAgeChange(e.target.value);
  };
  return (
    <div className={classes["input-wrapper"]}>
      <label htmlFor="age-input">Age (Years)</label>
      <input
        className={classes["age-input"]}
        autoComplete="off"
        value={props.ageState}
        type="number"
        id="age-input"
        onChange={handleInputChange}
      ></input>
    </div>
  );
};

export default AgeInput;
