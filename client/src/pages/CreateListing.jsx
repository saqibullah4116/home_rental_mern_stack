import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { categories, facilities, types } from "../data";
import CategoryCard from "../components/CategoryCard";
import PlaceType from "../components/PlaceType";
import GroupButtons from "../components/GroupButtons";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DeleteForever } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateListing = () => {
  const navigate = useNavigate();
  /* UPLOAD, DRAG & DROP, REMOVE PHOTOS */
  const [photos, setPhotos] = useState([]);
  const [category, setCategory] = useState(null);
  const [type, setType] = useState(null);
  // const [amenities, setAmenities] = useState([]);
  //location state
  const [formLoaction, setFormLoaction] = useState({
    streetAddress: "",
    aptSuite: "",
    city: "",
    province: "",
    country: "",
    price: null,
  });
  const handleChangeLocation = (e) => {
    const { name, value } = e.target;
    setFormLoaction({
      ...formLoaction,
      [name]: value,
    });
  };

  //place type  form
  const [formType, setFormType] = useState({
    title: "",
    description: "",
    highlight: "",
    highlightDetails: "",
    price: 0,
  });
  const handleChangePlaceType = (e) => {
    const { name, value } = e.target;
    setFormType({
      ...formType,
      [name]: value,
    });
  };

  //basic counts
  const [guestCount, setGuestCount] = useState(1);
  const [bedRooms, setBedRooms] = useState(1);
  const [beds, setBeds] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const handleGuestCountChange = (newCount) => {
    setGuestCount(newCount);
  };
  const handleBedRoomsCountChange = (newCount) => {
    setBedRooms(newCount);
  };
  const handleBedsCountChange = (newCount) => {
    setBeds(newCount);
  };
  const handleBathRoomsCountChange = (newCount) => {
    setBathrooms(newCount);
  };

  console.log("*********************************");
  console.log(category);
  console.log(type);
  console.log(formLoaction);
  console.log(guestCount);
  console.log(bedRooms);
  console.log(beds);
  console.log(bathrooms);
  console.log(formType);
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

  const creatorId = useSelector((state) => state.user._id);
  console.log(creatorId);
  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const listingFormData = new FormData();
      listingFormData.append("creator", creatorId);
      listingFormData.append("category", category);
      listingFormData.append("type", type);
      listingFormData.append("streetAddress", formLoaction.streetAddress);
      listingFormData.append("aptSuite", formLoaction.aptSuite);
      listingFormData.append("city", formLoaction.city);
      listingFormData.append("province", formLoaction.province);
      listingFormData.append("country", formLoaction.country);
      listingFormData.append("guestCount", guestCount);
      listingFormData.append("bedroomCount", bedRooms);
      listingFormData.append("bedCount", beds);
      listingFormData.append("bathroomCount", bathrooms);
      // ListingFormData.append("amenities", amenities)
      listingFormData.append("title", formType.title);
      listingFormData.append("description", formType.description);
      listingFormData.append("highlight", formType.highlight);
      listingFormData.append("highlightDesc", formType.highlightDetails);
      listingFormData.append("price", formType.price);
      // appending photo
      photos.forEach((photo) => {
        listingFormData.append("listingPhotos", photo);
      });

      // sending post request to server
      const response = await fetch("http://localhost:4000/listing/create", {
        method: "POST",
        body: listingFormData,
      });
      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
      console.log("Publish listing failed", error.message);
    }
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
                <Grid
                  key={index}
                  item
                  xs={6}
                  sm={4}
                  lg={2}
                  onClick={() => setCategory(item.label)}
                >
                  <CategoryCard item={item} selected={category} />
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
                <Box mt={1} onClick={() => setType(item.name)}>
                  <PlaceType item={item} selected={type} />
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
                name="streetAddress"
                value={formLoaction.streetAddress}
                onChange={handleChangeLocation}
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
                    name="aptSuite"
                    value={formLoaction.aptSuite}
                    onChange={handleChangeLocation}
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
                    name="city"
                    value={formLoaction.city}
                    onChange={handleChangeLocation}
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
                    name="province"
                    value={formLoaction.province}
                    onChange={handleChangeLocation}
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
                    name="country"
                    value={formLoaction.country}
                    onChange={handleChangeLocation}
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
                <GroupButtons
                  type={"Guests"}
                  onCountChange={handleGuestCountChange}
                />
                <GroupButtons
                  type={"Bedrooms"}
                  onCountChange={handleBedRoomsCountChange}
                />
                <GroupButtons
                  type={"Beds"}
                  onCountChange={handleBedsCountChange}
                />
                <GroupButtons
                  type={"Bathrooms"}
                  onCountChange={handleBathRoomsCountChange}
                />
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
              Upload Phots of your place from your device
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
                                      borderRadius: "8px",
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
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            flexDirection: "column",
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
          <Box mt={3}>
            <Typography variant="h6" fontWeight={"bold"} mb={1} mt={3}>
              What makes your place attractive and exciting?
            </Typography>
            <Box width={{ sm: "100%", md: "50%" }}>
              <TextField
                fullWidth
                variant="filled"
                label="Title"
                type="text"
                name="title"
                value={formType.title}
                onChange={handleChangePlaceType}
                InputLabelProps={{
                  style: { color: "rgba(0, 0, 0, 0.5)" },
                }}
                InputProps={{
                  style: { color: "black" },
                }}
              />
              <TextareaAutosize
                style={{ width: "100%", color: "black", marginTop: "8px" }}
                aria-label="Description"
                minRows={3}
                placeholder="descirption"
                name="description"
                value={formType.description}
                onChange={handleChangePlaceType}
              />
              <TextField
                fullWidth
                variant="filled"
                label="Highlight"
                type="text"
                name="highlight"
                value={formType.highlight}
                onChange={handleChangePlaceType}
                InputLabelProps={{
                  style: { color: "rgba(0, 0, 0, 0.5)" },
                }}
                InputProps={{
                  style: { color: "black" },
                }}
              />
              <TextareaAutosize
                style={{ width: "100%", color: "black", marginTop: "8px" }}
                aria-label="Highlight Details"
                minRows={3}
                placeholder="Highlight Details"
                name="highlightDetails"
                value={formType.highlightDetails}
                onChange={handleChangePlaceType}
              />
            </Box>
            <Typography variant="h6" fontWeight={"bold"} mb={1} mt={3}>
              Now set your price
            </Typography>
            <TextField
              variant="filled"
              label="Price"
              type="number"
              name="price"
              value={formType.price}
              onChange={handleChangePlaceType}
              InputLabelProps={{
                style: { color: "rgba(0, 0, 0, 0.5)" },
              }}
              InputProps={{
                style: { color: "black" },
              }}
            />
          </Box>
        </Box>
        <Button
          onClick={handlePost}
          style={{
            fontSize: "1rem",
            backgroundColor: "#ff69b4",
            color: "white",
            padding: "5px 10px",
            borderRadius: "8px",
            marginTop: "8px",
            marginBottom: "8px",
            color: "black",
          }}
        >
          Create listing
        </Button>
      </Box>
    </>
  );
};

export default CreateListing;
