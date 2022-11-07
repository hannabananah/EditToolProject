import React, { useState } from "react";
import "./App.css";
import ImageInput from "./components/imageInput";
import TextInput from "./components/textInput";

function App({}) {
  const [previewImage, setPreviewImage] = useState([]);
  const onSelectFileButton = (e) => {
    console.log(e.target.files);
    console.log(Array.isArray(e.target.files));
    console.log(Array.isArray(Array.from(e.target.files)));
    Array.from(e.target.files).map((item, index) => {
      let images = [];
      images.push({
        src: URL.createObjectURL(item),
      });
      setPreviewImage((pre) => pre.concat(images));
    });
  };
  console.log(previewImage);
  const [txt, setTxt] = useState([]);
  
  // TextInput 눌렀을 때 실행되는 함수
  const onClickButton = () => {
    const input = {
      text: "",
    };
    setTxt([...txt, input]);
  };
  console.log(txt);
  return (
    <div className="App">
      {/* 텍스트 인풋 */}
      <TextInput onClick={onClickButton} />
      {/* 이미지 버튼 */}
      <ImageInput onSelectFile={onSelectFileButton} />

      {previewImage.map((item, index) => {
        return <img src={item.src} key={index} />;
      })}
    </div>
  );
}

export default App;
