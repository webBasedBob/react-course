import React, { useState } from "react";
import "./App.css";
import AddUserForm from "./Components/AddUserForm/AddUserForm";
import UsersList from "./Components/UsersList/UsersList";
import ErrorModal from "./Components/ErrorModal/ErrorModal";
import Overlay from "./Components/General_ui/Overlay";
function App() {
  const [users, setUsers] = useState([]);
  const handleUserAdd = (userData) => {
    //validate user input
    //change state - add user to state array
    setUsers((prevState) => {
      return [...prevState, userData];
    });
  };
  const [errorMessage, setErrorMessage] = useState("");
  const closeModalHandler = () => {
    setErrorMessage("");
  };
  const inputErrorHandler = (message) => {
    setErrorMessage(message);
  };
  return (
    <div className="container">
      {errorMessage.length > 0 ? (
        <Overlay onModalClose={closeModalHandler}>
          <ErrorModal message={errorMessage} onModalClose={closeModalHandler} />
        </Overlay>
      ) : (
        ""
      )}
      <AddUserForm onInputError={inputErrorHandler} onAddUser={handleUserAdd} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
