import classes from "./UserNameInput.module.css";

const UserNameInput = (props) => {
  const handleInputChange = (e) => {
    props.onNameChange(e.target.value);
  };
  return (
    <div className={classes["input-wrapper"]}>
      <label htmlFor="user-name-input">Username</label>
      <input
        className={classes["user-name-input"]}
        autoComplete="off"
        type="text"
        id="user-name-input"
        onChange={handleInputChange}
        value={props.usernameState}
      ></input>
    </div>
  );
};

export default UserNameInput;
