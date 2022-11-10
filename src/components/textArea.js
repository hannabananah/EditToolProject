import ContentEditable from "react-contenteditable";
const TextArea = ({ id,content, onChangeTextInput, onMouseDown }) => {
  return (
    <ContentEditable
      html={content}
      placeholder="울랄라"
      onChange={onChangeTextInput}
      onMouseDown={onMouseDown}
      id={id}
      style={{
        width: 200,
        border: "1px solid orange",
        backgroundColor: "beige",
        borderRadius: 20,
        display: "inline-block",
        marginTop: 20,
        color: "blue",
        position:'absolute',
      }}
    />
  );
};
export default TextArea;
