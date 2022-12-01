import "../styles/styles.css";
import HTMLFlipBook from "react-pageflip";
import { useEffect, useRef, useState } from "react";
import useWindowWide from "./usewidth";
import TextArea from "~/components/textArea";

export default function Demo({ previewImage, txt, onChangeTextInput }) {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(700);
  //   const widthScreen = useWindowWide();
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const book = useRef();

  //   useEffect(() => {
  //     if (widthScreen < 600) {
  //       setWidth(400);
  //       setHeight(300);
  //     } else {
  //       setWidth(Math.ceil((0.9 * widthScreen) / 2));
  //       setHeight(Math.ceil((0.6 * widthScreen) / 2));
  //     }
  //   }, [widthScreen]);

  useEffect(() => {
    setTimeout(() => {
      setTotal(book.current.pageFlip().getPageCount());
    }, 1000);
  }, []);

  const updatePage = ({ data }) => setPage(data + 2);

  return (
    <div className="flex" style={{ padding: "50px 0" }}>
      <span
        onClick={() => book.current.pageFlip().flipNext()}
        className={"next"}
      ></span>
      <HTMLFlipBook
        onFlip={updatePage}
        width={width}
        height={height}
        ref={book}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        useMouseEvents={false}
        onChangeState="read"
      >
        <div className="page">
          {previewImage.map((item, index) => {
            return (
              <div style={{ position: "absolute" }}>
                <img src={item.src} key={index} />
              </div>
            );
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
        <div className="page">2</div>
        <div className="page">3</div>
        <div className="page">4</div>
        <div className="page">5</div>
        <div className="page">6</div>
        <div className="page">7</div>
        <div className="page">8</div>
        <div className="page">9</div>
        <div className="page">10</div>
        <div className="page">11</div>
        <div className="page">12</div>
        <div className="page">13</div>
        <div className="page">14</div>
        <div className="page">15</div>
        <div className="page">16</div>
        <div className="page">17</div>
        <div className="page">18</div>
        <div className="page">19</div>
        <div className="page">20</div>
      </HTMLFlipBook>
      <span
        onClick={() => book.current.pageFlip().flipPrev()}
        className={"previous"}
      ></span>
      <span className="info-page">
        {page - 1}-{page} / {total}
      </span>
    </div>
  );
}
