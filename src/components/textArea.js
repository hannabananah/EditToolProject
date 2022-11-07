import ContentEditable from "react-contenteditable";
const TextArea = ({ content, onChangeTextInput }) => {
  return (
    <ContentEditable
      html={content}
      placeholder="울랄라"
      onChange={onChangeTextInput}
      style={{
        width: 200,
        border: "1px solid orange",
        backgroundColor: "beige",
        borderRadius: 20,
        display: "inline-block",
        marginTop: 20,
      }}
    />
  );
};
export default TextArea;
