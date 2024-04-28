import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const PlaceType = ({ item }) => {
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 600,
          bgcolor: "background.paper",
          padding: "0px",
          borderColor: "rgba(0, 0, 0, 0.2)", 
          borderWidth: "1px", 
          borderStyle: "solid",
          borderRadius:"3%",
          "&:hover": {
            // backgroundColor:"red",
            borderColor: "#ff69b4", // Pinkish color
            borderWidth: "1px", // Border width
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
