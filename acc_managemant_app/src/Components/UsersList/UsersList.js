import classes from "./UsersList.module.css";
import User from "./User";
const UsersList = (props) => {
  return (
    <ul className={classes["users-list"]}>
      {props.users.map((user) => {
        return <User key={user.id} name={user.name} age={user.age} />;
      })}
    </ul>
  );
};

export default UsersList;
