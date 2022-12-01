import ContentEditable from "react-contenteditable";
import { useStyles } from "~/styles/textArea";

const TextArea = ({ id, content, onChangeTextInput, onMouseDown }) => {
  const classes = useStyles();

  return (
    <ContentEditable
      html={content}
      placeholder="울랄라"
      onChange={onChangeTextInput}
      onMouseDown={onMouseDown}
      id={id}
      className={classes.textBubbleStyle1}
    />
  );
};
export default TextArea;
