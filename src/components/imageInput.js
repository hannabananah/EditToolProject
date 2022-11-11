const ImageInput = ({ onSelectFile }) => {
  return (
    <label>
      <input
        type="file"
        name="file"
        accept="image/* svg"
        multiple
        onChange={onSelectFile}
      />
    </label>
  );
};

export default ImageInput;
