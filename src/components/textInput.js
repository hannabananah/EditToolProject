import { useStyles } from "~/styles/textInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const TextInput = ({ onClick }) => {
  const classes = useStyles();
  return (
    <div>
      <button className={classes.textButtonStyle1} onClick={onClick}>
        <FontAwesomeIcon icon={faPencil} className={classes.penIcon}/>
        {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
      </button>
    </div>
  );
};
export default TextInput;
