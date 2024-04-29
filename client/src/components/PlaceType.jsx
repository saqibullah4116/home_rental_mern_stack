import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";

const PlaceType = ({ item, selected = "" }) => {
  const [select, setSelect] = useState(false);
  useEffect(() => {
    if (item.name === selected) {
      setSelect(true);
    } else {
      setSelect(false);
    }
  }, [item, selected]);
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 600,
          bgcolor: "background.paper",
          padding: "0px",
          borderColor: select ? "#ff69b4" : "transparent",
          borderWidth: "2px",
          borderStyle: "solid",
          borderRadius: "3%",

          "&:hover": {
            // backgroundColor:"red",
            borderColor: "#ff69b4", // Pinkish color
            borderWidth: "2px", // Border width
            borderStyle: "solid",
          },
        }}
      >
        <ListItem>
          <ListItemText primary={item.name} secondary={item.description} />
          {item.icon}
        </ListItem>
      </List>
    </>
  );
};

export default PlaceType;
