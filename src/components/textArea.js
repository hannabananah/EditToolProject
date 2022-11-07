import ContentEditable from "react-contenteditable";
const TextArea = ({ content, onChangeTextInput }) => {
  return (
    <ContentEditable
      html={content}
      placeholder="울랄라"
      onChange={onChangeTextInput}
    />
  );
};
export default TextArea;
