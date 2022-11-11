import React, { useState, useRef } from "react";
import "./App.css";
import BackGround from "~/components/backGround.js";
import ImageInput from "~/components/imageInput";
import TextInput from "~/components/textInput";
import TextArea from "~/components/textArea";
import Demo from "~/components/demo";

function App({}) {
  const [previewImage, setPreviewImage] = useState([]);
  const imageId = useRef(0); // 이미지 아이디 생성
  const inputId = useRef(0); // 인풋 아이디 생성
  // image 파일탐색기에서 선택 됐을 때 실행되는 함수
  const onSelectFileButton = (e) => {
    console.log(e.target.files);
    console.log(Array.isArray(e.target.files));
    console.log(Array.isArray(Array.from(e.target.files)));
    Array.from(e.target.files).map((item, index) => {
      let images = [];
      images.push({
        src: URL.createObjectURL(item),
        id: imageId.current,
      });
      setPreviewImage((pre) => pre.concat(images));
      imageId.current += 1; //동일한 코드 imageId.current = imageId.current + 1
    });
  };
  console.log("previewImage---------->>>>>", previewImage);
  const [txt, setTxt] = useState([]);

  // TextInput 눌렀을 때 실행되는 함수
  const onClickButton = () => {
    const input = {
      text: "",
      id: inputId.current,
    };
    setTxt([...txt, input]);
    inputId.current += 1; //동일한 코드 inputId.current = inputId.current + 1
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
  //  드래그
  let img_L = 0;
  let img_T = 0;
  let targetObj;

  // 이미지 움직이기
  const moveDrag = (e) => {
    let e_obj = window.event ? window.event : e;
    let dmvx = parseInt(e_obj.clientX + img_L);
    let dmvy = parseInt(e_obj.clientY + img_T);
    targetObj.style.left = dmvx + "px";
    targetObj.style.top = dmvy + "px";
    return false;
  };

  // 드래그 멈추기
  const stopDrag = () => {
    document.onmousemove = null;
    document.onmouseup = null;
  };
  const getLeft = (o) => {
    console.log("o--------------------------------", o);
    return window.pageXOffset + o.getBoundingClientRect().left;
    // parseInt(o.style.left.replace('px', ''));
  };

  const getTop = (o) => {
    return window.pageYOffset + o.getBoundingClientRect().top;
    // parseInt(o.style.top.replace('px', ''));
  };

  // 드래그 시작
  const startDrag = (e, id, type) => {
    // e.preventDefault();
    console.log(e);
    let obj;

    if (type == "image") {
      obj = document.querySelector(`#img_${id}`);
    } else if (type == "input") {
      obj = document.querySelector(`#txt_${id}`);
    }

    targetObj = obj;
    let e_obj = window.event ? window.event : e;
    img_L = getLeft(obj) - e_obj.clientX;
    img_T = getTop(obj) - e_obj.clientY;

    document.onmousemove = moveDrag;
    document.onmouseup = stopDrag;

    // if(e_obj.preventDefault)e_obj.preventDefault();
  };

  return (
    <div className="App">
      {/* 배경 */}
      {/* <BackGround /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          columnGap: 20,
          position: "fixed", //소스를 드래그 할 시 포지션이 고정되어 있어야 그 위치 그대로 잡힘
          top: 0,
          right: 0,
        }}
      >
        {/* 텍스트 인풋 */}
        <TextInput onClick={onClickButton} />
        {/* 이미지 버튼 */}
        <ImageInput onSelectFile={onSelectFileButton} />
      </div>
      <div style={{ position: "relative" }}>
        {previewImage.map((item, index) => {
          return (
            <div
              key={index}
              id={`img_${item.id}`}
              style={{
                position: "relative",
              }}
              onMouseDown={(e) => startDrag(e, index, "image")}
            >
              <img
                src={item.src}
                key={index}
                style={{ position: "absolute" }}
              />
            </div>
          );
        })}
      </div>
      {txt.map((item, index) => {
        return (
          <TextArea
            content={item.text}
            key={index}
            onChangeTextInput={(e) => onChangeTextInput(e, index)}
            onMouseDown={(e) => startDrag(e, index, "input")}
            id={`txt_${item.id}`}
          />
        );
      })}
      {/* <Demo
        previewImage={previewImage}
        txt={txt}
        onChangeTextInput={onChangeTextInput}
      /> */}
    </div>
  );
}

export default App;
