import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Box, Divider, Grid, TextField, Typography } from "@mui/material";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { categories, facilities, types } from "../data";
import CategoryCard from "../components/CategoryCard";
import PlaceType from "../components/PlaceType";
import GroupButtons from "../components/GroupButtons";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DeleteForever } from "@mui/icons-material";

const CreateListing = () => {
  /* UPLOAD, DRAG & DROP, REMOVE PHOTOS */
  const [photos, setPhotos] = useState([]);
  console.log(photos);

  const handleUploadPhotos = (e) => {
    const newPhotos = e.target.files;
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };

  const handleDragPhoto = (result) => {
    if (!result.destination) return;

    const items = Array.from(photos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPhotos(items);
  };

  const handleRemovePhoto = (indexToRemove) => {
    setPhotos((prevPhotos) =>
      prevPhotos.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <>
      <Navbar />
      <Box
        maxWidth="md"
        margin="auto"
        paddingLeft={{ sm: 5, md: 0 }}
        paddingRight={{ sm: 5, md: 0 }}
        paddingTop={2}
      >
        <Typography color={"black"} fontWeight={"bold"} variant="h5">
          Publish Your Place
        </Typography>
        <Box padding={3} backgroundColor="#f7f7f7">
          <Typography color={"red"} variant="h6" fontWeight={"bold"}>
            Step 1: Tell us about your place
          </Typography>
          <Divider
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              height: "2px",
              borderRadius: "2px",
            }}
          />
          {/* category */}
          <Box padding={2}>
            <Typography color={"black"} variant="p">
              which of these categories best describes your place?
            </Typography>
            <Box mt={1} />
            <Grid container spacing={1}>
              {categories.map((item, index) => (
                <Grid key={index} item xs={6} sm={4} lg={2}>
                  <CategoryCard item={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
          {/* Type of place for guest */}
          <Box mt={2} />
          <Box>
            <Typography variant="h6" fontWeight={"bold"}>
              What type of place will guests have?
            </Typography>
            <Box mt={1}>
              {types.map((item, index) => (
                <Box mt={1}>
                  <PlaceType item={item} />
                </Box>
              ))}
            </Box>
          </Box>
          {/* location of place */}
          <Box mt={3}>
            <Typography variant="h6" fontWeight={"bold"} mb={1}>
              Where is your place loacted?
            </Typography>
            <Box mr={{ xs: 0, sm: 0, md: 32 }}>
              <TextField
                fullWidth
                variant="filled"
                label="Street address"
                type="text"
                size="small"
                InputLabelProps={{
                  style: { color: "rgba(0, 0, 0, 0.5)" },
                }}
                InputProps={{
                  style: { color: "black" },
                }}
              />
              <Box display={"flex"} mt={2} width={"100%"}>
                <Box mr={2} width={"100%"}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Apartments, Suits,etc if applicable"
                    type="text"
                    size="small"
                    InputLabelProps={{
                      style: { color: "rgba(0, 0, 0, 0.5)" },
                    }}
                    InputProps={{
                      style: { color: "black" },
                    }}
                  />
                </Box>
                <Box width={"100%"}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="city"
                    type="text"
                    size="small"
                    InputLabelProps={{
                      style: { color: "rgba(0, 0, 0, 0.5)" },
                    }}
                    InputProps={{
                      style: { color: "black" },
                    }}
                  />
                </Box>
              </Box>
              <Box display={"flex"} mt={2} width={"100%"}>
                <Box mr={2} width={"100%"}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Province"
                    type="text"
                    size="small"
                    InputLabelProps={{
                      style: { color: "rgba(0, 0, 0, 0.5)" },
                    }}
                    InputProps={{
                      style: { color: "black" },
                    }}
                  />
                </Box>
                <Box width={"100%"}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Country"
                    type="text"
                    size="small"
                    InputLabelProps={{
                      style: { color: "rgba(0, 0, 0, 0.5)" },
                    }}
                    InputProps={{
                      style: { color: "black" },
                    }}
                  />
                </Box>
              </Box>
              {/* group button */}
              <Typography variant="h6" fontWeight={"bold"} mb={1} mt={3}>
                Share the basics about your place?
              </Typography>
              <Box sx={{ "& > *": { marginBottom: "16px" } }}>
                <GroupButtons type={"Guests"} />
                <GroupButtons type={"Bedrooms"} />
                <GroupButtons type={"Beds"} />
                <GroupButtons type={"Bathrooms"} />
              </Box>
            </Box>
          </Box>
          {/* step 2 starts from here */}
          <Typography color={"red"} variant="h6" fontWeight={"bold"} mt={2}>
            Step 2: Make your place stand out
          </Typography>
          <Divider
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              height: "2px",
              borderRadius: "2px",
            }}
          />
          {/* facilities we offer to our guests  */}
          <Box padding={2}>
            <Typography color={"black"} variant="p">
              Tell guests what your place has to offfer?
            </Typography>
            <Box mt={1} />
            <Grid container spacing={1}>
              {facilities.map((item, index) => (
                <Grid key={index} item xs={6} sm={4} lg={2}>
                  <CategoryCard item={item} />
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* let's add some pictures */}
          <Box mt={3}>
            <Typography color={"black"} variant="p">
              Upload Phtots of your place from your device
            </Typography>
            {/* Drag and drop start here */}
            <DragDropContext onDragEnd={handleDragPhoto}>
              <Droppable droppableId="photos" direction="horizontal">
                {(provided) => (
                  <Box {...provided.droppableProps} ref={provided.innerRef}>
                    {photos.length < 1 && (
                      <>
                        <input
                          id="image"
                          type="file"
                          name="profileImage"
                          onChange={handleUploadPhotos}
                          accept="image/*"
                          style={{ display: "none" }}
                          multiple
                        />
                        <label
                          htmlFor="image"
                          style={{
                            color: "black",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            cursor: "pointer",
                            border: "1px dotted black",
                            padding: "8px",
                          }}
                        >
                          <PhotoLibraryIcon color="black" />
                          <p>Upload Photos</p>
                        </label>
                      </>
                    )}
                    {photos.length >= 1 && (
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-start"
                      >
                        {photos.map((photo, index) => {
                          return (
                            <Draggable
                              key={index}
                              draggableId={index.toString()}
                              index={index}
                            >
                              {(provided) => (
                                <Box
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                  display="flex"
                                  alignItems="center"
                                  justifyContent="flex-start"
                                  position="relative"
                                  mr={1}
                                >
                                  <img
                                    src={URL.createObjectURL(photo)}
                                    alt="listing images"
                                    style={{
                                      maxWidth: "100%",
                                      maxHeight: "180px",
                                      objectFit: "cover",
                                      borderRadius: "8px"
                                    }}
                                  />
                                  <button
                                    onClick={() => handleRemovePhoto(index)}
                                    style={{
                                      position: "absolute",
                                      top: 0,
                                      right: 0,
                                      background: "transparent",
                                      border: "none",
                                      cursor: "pointer",
                                    }}
                                  >
                                      <DeleteForever></DeleteForever>
                                  </button>
                                </Box>
                              )}
                            </Draggable>
                          );
                        })}
                        <input
                          id="image"
                          type="file"
                          name="profileImage"
                          onChange={handleUploadPhotos}
                          accept="image/*"
                          style={{ display: "none" }}
                          multiple
                        />
                        <label
                          htmlFor="image"
                          style={{
                            color: "black",
                            display:"flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            flexDirection:"column",
                            padding: "8px",
                          }}
                        >
                          <PhotoLibraryIcon color="black" />
                          <h5>Upload Photos</h5>
                        </label>
                      </Box>
                    )}
                  </Box>
                )}
              </Droppable>
            </DragDropContext>
            {/* Drag and drop end in here */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreateListing;
