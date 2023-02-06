import classes from "./User.module.css";

const User = (props) => {
  return (
    <li className={classes.user}>
      <span className={classes.username}>{props.name}</span> ({props.age} years
      old)
    </li>
  );
};

export default User;
