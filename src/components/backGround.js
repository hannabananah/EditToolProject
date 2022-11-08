import HTMLFlipBook from "react-pageflip";

const BackGround = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        top: 120,
        zIndex: -1,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <HTMLFlipBook
        width={700}
        height={800}
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        // maxShadowOpacity={0.5}
        // showCover={true}
        mobileScrollSupport={true}
        style={{
          backgroundColor: "#fff",
          backgroundImage: "linear-gradient(to right,white 92%,rgba(0,0,0,0.1)",
          boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            display: "inline-block",
          }}
        >
          1
        </div>
        <div
          style={{
            boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
            display: "inline-block",
          }}
        >
          2
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(to right,white 92%,rgba(0,0,0,0.1)",
            boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
            display: "inline-block",
          }}
        >
          3
        </div>
        <div
          style={{
            boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
            display: "inline-block",
          }}
        >
          4
        </div>
      </HTMLFlipBook>
    </div>
  );
};
export default BackGround;
