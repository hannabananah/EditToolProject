import ContentEditable from "react-contenteditable";
const TextArea = ({ content, onChangeTextInput, onMouseDown }) => {
  return (
    <ContentEditable
      html={content}
      placeholder="울랄라"
      onChange={onChangeTextInput}
      onMouseDown={onMouseDown}
      style={{
        width: 200,
        border: "1px solid orange",
        backgroundColor: "beige",
        borderRadius: 20,
        display: "inline-block",
        marginTop: 20,
        color: "blue",
      }}
    />
  );
};
export default TextArea;
