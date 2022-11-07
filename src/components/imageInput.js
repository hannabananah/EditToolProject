const ImageInput = ({ onSelectFile }) => {
  return (
    <div>
      <label>
        Image
        <input
          type="file"
          name="file"
          accept="image/* svg"
          multiple
          onChange={onSelectFile}
        />
      </label>
    </div>
  );
};

export default ImageInput;
