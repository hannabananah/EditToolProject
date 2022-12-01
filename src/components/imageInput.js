import { useStyles } from "~/styles/imageInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";

const ImageInput = ({ onSelectFile }) => {
  const classes = useStyles();
  return (
    <div>
      <label>
        <FontAwesomeIcon icon={faImages} />
        <input
          type="file"
          name="file"
          accept="image/* svg"
          multiple
          onChange={onSelectFile}
          className={classes.imageLabelStyle}
        />
      </label>
    </div>
  );
};

export default ImageInput;
