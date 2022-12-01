import React from "react";
import { Rnd } from "react-rnd";

const DragDemo = ({ previewImage }) => (
  <div style={{ position: "relative", width: "100%" }}>
    {previewImage.map((item, index) => {
      return (
        <Rnd key={index}>
          <img className="dragImg" src={item.src} draggable="false" />
        </Rnd>
      );
    })}
  </div>
);
export default DragDemo;
