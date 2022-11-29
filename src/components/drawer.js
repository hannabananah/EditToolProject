import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Drawer = ({ opendrawer,open }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        display: "flex",
    }}
    className={open ? "optionOn" : "optionOff"}
    >
      <div
        style={{
            width: 100,
            height: "100vh",
            backgroundColor: "azure",
        }}
      >
        <div>랄라라1</div>
        <div>랄라라2</div>
        <div>랄라라3</div>
        <div>랄라라4</div>
        <div>랄라라5</div>
        <div>랄라라6</div>
      </div>
        <button onClick={opendrawer}>
          <FontAwesomeIcon icon={faBars} />
        </button>
    </div>
  );
};
export default Drawer;
