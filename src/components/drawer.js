const Drawer = ({ open }) => {
  return (
    <div
      style={{
        position: "relative",
        top: 0,
        display: "flex",
      }}
      className={open ? "optionOn" : "optionOff"}
    >
      <div
        style={{
          width: 100,
          height: "calc(100vh - 76px)",
          backgroundColor: "azure",
        }}
      >
        <button className="option_buttons">1</button>
        <button className="option_buttons">2</button>
        <button className="option_buttons">3</button>
        <button className="option_buttons">4</button>
        <button className="option_buttons">5</button>
        <button className="option_buttons">6</button>
      </div>
    </div>
  );
};
export default Drawer;
