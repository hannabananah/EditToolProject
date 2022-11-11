import React from "react";
import { Rnd } from "react-rnd";

const Box = ({ src }) => (
  <div
    className="box"
    style={{
      margin: 0,
      height: "100%",
      paddingBottom: "40px",
    }}
  >
    <article className="media">
      <div className="media-left">
        <figure className="image">
          <img src={src} draggable="false" />
        </figure>
      </div>
    </article>
  </div>
);

const DragDemo = ({ previewImage }) => (
  <div style={{ position: "relative" }}>
    {previewImage.map((item, index) => {
      return (
        <Rnd
          default={{
            x: 100,
            y: 100,
            width: "auto",
            height: "auto",
          }}
          minWidth={200}
          //   minHeight={100}
          bounds="window"
          style={{ backgroundColor: "#fff" }}
        >
          <Box src={item.src} />
        </Rnd>
      );
    })}
  </div>
);
export default DragDemo;
