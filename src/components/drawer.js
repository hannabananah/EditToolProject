import { useStyles } from "~/styles/drawer";

const Drawer = ({ open }) => {
  const classes = useStyles();

  return (
    <div
      style={{
        position: "relative",
        top: 0,
        display: "flex",
      }}
      className={open ? "optionOn" : "optionOff"}
    >
      <div className={classes.buttonList}>
        <button className={classes.optionButtons}>1</button>
        <button className={classes.optionButtons}>2</button>
        <button className={classes.optionButtons}>3</button>
        <button className={classes.optionButtons}>4</button>
        <button className={classes.optionButtons}>5</button>
        <button className={classes.optionButtons}>6</button>
      </div>
    </div>
  );
};
export default Drawer;
