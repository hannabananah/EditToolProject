import React, { useState, useRef } from "react";
import "./App.css";
import BackGround from "~/components/backGround.js";
import ImageInput from "~/components/imageInput";
import TextInput from "~/components/textInput";
import TextArea from "~/components/textArea";
import Demo from "~/components/demo";
import DragDemo from "~/components/dragDemo";
import { Rnd } from "react-rnd";
import Drawer from "~/components/drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPalette,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import SelectColour from "~/components/selectColour";
import { useStyles } from "~/styles/dropDown";

function App({}) {
  const classes = useStyles();

  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href =
    "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  document.head.appendChild(styleLink);

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
  const [open, setOpen] = useState(false);
  const opendrawer = () => {
    setOpen((pre) => !pre); //previous: 이전상태에서 setOpen를 눌러 true<->false 변환
    console.log("ok");
  };

  return (
    <div className="App">
      <header className={classes.header}>
        <div className="header_btn_layout">
          <button className="header_btn">제작의도</button>
          <button className="header_btn">사용법</button>
        </div>
        <div className={classes.headerRight}>
          <FontAwesomeIcon icon={faPalette} />
          <span>앨범컬러 변경:</span>
          <SelectColour />
        </div>
      </header>
      <section className="sub_header">
        <div className="sub_header_left">
          <button onClick={opendrawer} className="hambuger">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <h2 className="title">Photo Album</h2>
        </div>
        <div
          style={{
            alignContent: "center",
            display: "flex",
            columnGap: 10,
            // position: "fixed", //소스를 드래그 할 시 포지션이 고정되어 있어야 그 위치 그대로 잡힘
            // top: 0,
            // left: 0,
          }}
        >
          {/* 텍스트 인풋 */}
          <TextInput onClick={onClickButton} />
          {/* 이미지 버튼 */}
          <ImageInput onSelectFile={onSelectFileButton} />
          <FontAwesomeIcon
            icon={faDownload}
            className="down_btn_style"
          />
        </div>
      </section>
      <div style={{ display: "flex", flex: 1 }}>
        <Drawer open={open} />
        {/* 배경 */}
        {/* <BackGround /> */}
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
        <DragDemo previewImage={previewImage} />
      </div>
    </div>
  );
}
export default App;
