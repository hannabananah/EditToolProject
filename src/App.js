import React, { useState } from "react";
import "./App.css";
import BackGround from "./components/backGround.js";
import ImageInput from "./components/imageInput";
import TextInput from "./components/textInput";
import TextArea from "./components/textArea";

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

  // TextArea 내용이 바뀔 때마다 실행되는 함수->text: ""의 스트링값을 넣어줌
  const onChangeTextInput = (e, index) => {
    console.log(e.target.value);
    console.log(index);
    const txtCopy = JSON.parse(JSON.stringify(txt)); //txt 스테이트를 복사
    txtCopy[index].text = e.target.value;
    setTxt(txtCopy);
  };

  return (
    <div className="App">
      {/* 배경 */}
      <BackGround />
      {/* 텍스트 인풋 */}
      <TextInput onClick={onClickButton} />
      {/* 이미지 버튼 */}
      <ImageInput onSelectFile={onSelectFileButton} />
      {previewImage.map((item, index) => {
        return <img src={item.src} key={index} />;
      })}
      {txt.map((item, index) => {
        return (
          <TextArea
            content={item.text}
            key={index}
            onChangeTextInput={(e) => onChangeTextInput(e, index)}
          />
        );
      })}
    </div>
  );
}

export default App;
