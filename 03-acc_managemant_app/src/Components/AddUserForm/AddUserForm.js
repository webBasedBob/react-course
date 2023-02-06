import React, { useState } from "react";
import classes from "./AddUserForm.module.css";
import UserNameInput from "./UserNameInput";
import AgeInput from "./AgeInput";
import Button from "../General_ui/Button";
const AddUserForm = (props) => {
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username, userAge);
    if (username === "" || userAge === "") {
      props.onInputError(
        "One of the input fields is empty, please fill all the input fields"
      );
      return;
    }
    if (Number(userAge) <= 0) {
      props.onInputError("Please enter a valid age");
      return;
    }
    let userData = {
      name: username,
      age: userAge,
      id: Math.floor(Math.random() * 100000000000000),
    };
    props.onAddUser(userData);
    setUsername("");
    setUserAge("");
  };
  const usernameChangeHandler = (newName) => {
    setUsername(newName);
  };
  const useAgeChangeHandler = (newAge) => {
    setUserAge(newAge);
  };
  return (
    <form className={classes["add-user-form"]} onSubmit={submitHandler}>
      <UserNameInput
        usernameState={username}
        onNameChange={usernameChangeHandler}
      />
      <AgeInput ageState={userAge} onAgeChange={useAgeChangeHandler} />
      <Button type="submit" text="Add User" />
    </form>
  );
};

export default AddUserForm;
