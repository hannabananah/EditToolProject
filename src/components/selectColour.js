import { mergeClasses } from "@material-ui/styles";
import React from "react";
import { Dropdown } from "semantic-ui-react";

const colourOptions = [
  {
    key: "White",
    text: "White",
    value: "White",
    label: { color: "white", empty: true, circular: true },
  },
  {
    key: "Beige",
    text: "Beige",
    value: "Beige",
    label: { color: "yellow", empty: true, circular: true },
  },
  {
    key: "Pink",
    text: "Pink",
    value: "Pink",
    label: { color: "pink", empty: true, circular: true },
  },
  {
    key: "Green",
    text: "Green",
    value: "Green",
    label: { color: "green", empty: true, circular: true },
  },
  {
    key: "Blue",
    text: "Blue",
    value: "Blue",
    label: { color: "blue", empty: true, circular: true },
  },
  {
    key: "Gray",
    text: "Gray",
    value: "Gray",
    label: { color: "gray", empty: true, circular: true },
  },
  {
    key: "Black",
    text: "Black",
    value: "Black",
    label: { color: "black", empty: true, circular: true },
  },
];

const SelectColour = () => {
  return (
    <Dropdown
      fluid
      selection
      options={colourOptions}
      defaultValue={colourOptions[0].value}
      style={{
        width: "110px",
        backgroundColor: "transparent",
        border: "none",
        textAlign: "center",
      }}
    />
  );
};

export default SelectColour;
