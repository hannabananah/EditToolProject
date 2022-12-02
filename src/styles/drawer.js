import { makeStyles } from "@material-ui/styles";
import { hover } from "@testing-library/user-event/dist/hover";

export const useStyles = makeStyles({
  buttonList: {
    width: 100,
    height: "calc(100vh - 76px)",
    backgroundColor: "#fff",
    borderRight: "1px solid #e2e2e2",
  },
  optionButtons: {
    width: "50%",
    height: 30,
    backgroundColor: "transparent",
    border: "none",
    "&:active,&:hover": {
      backgroundColor: "#efefef",
      borderRadius: 5,
    },
  },
});
