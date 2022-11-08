const BackGround = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        top: 120,
        zIndex: -1,
      }}
    >
      <span
        style={{
          width: 600,
          minWidth: 400,
          height: 800,
          minHeight: 500,
          backgroundColor: "#fff",
          backgroundImage: "linear-gradient(to right,white 92%,rgba(0,0,0,0.1)",
          boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
          display: "inline-block",
        }}
        className="shadow-inner"
      ></span>
      <span
        style={{
          width: 600,
          minWidth: 400,
          height: 800,
          minHeight: 500,
          backgroundColor: "#fff",
          boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
          display: "inline-block",
        }}
      ></span>
    </div>
  );
};
export default BackGround;
