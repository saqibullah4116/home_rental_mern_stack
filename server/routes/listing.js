const router = require("express").Router();
const multer = require("multer");

const Listing = require("../models/Listing");
const User = require("../models/User");

// configuration for multer to upload property image
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "public/propertyImages");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

//   create listing api
router.post("/create", upload.array("listingPhotos"), async (req, res) => {
  try {
    const {
      creator,
      category,
      type,
      streetAddress,
      aptSuite,
      city,
      province,
      country,
      guestCount,
      bedroomCount,
      bedCount,
      bathroomCount,
      amenities,
      title,
      description,
      highlight,
      highlightDesc,
      price,
    } = req.body;
    const user = await User.findById(creator);

    const listingPhotos = req.files;
    if (!listingPhotos) {
      return res.status(400).send("No file uploaded");
    }
    const listingPhotosPath = listingPhotos.map((file) => file.path);
    const newListing = new Listing({
      creator,
      category,
      type,
      streetAddress,
      aptSuite,
      city,
      province,
      country,
      guestCount,
      bedroomCount,
      bedCount,
      bathroomCount,
      amenities,
      listingPhotosPath,
      title,
      description,
      highlight,
      highlightDesc,
      price,
    });

    await newListing.save();
    res.status(200).json(newListing);
  } catch (error) {
    res
      .status(409)
      .json({ message: "Fail to create listing", error: error.message });
    console.log(error);
  }
});

// getting the listing
router.get("/", async (req, res) => {
  const qCategory = req.query.category;
  try {
    let listings;
    if (qCategory) {
      listings = await Listing.find({ category: qCategory }).populate(
        "creator"
      );
    } else {
      listings = await Listing.find();
    }
    res.status(200).json(listings);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Fail to get Listings", error: error.message });
    console.log(error);
  }
});

//now getting single listing.
router.get("/:listingId", async (req, res) => {
  try {
    const { listingId } = req.params;
    const sinlgeListing = await Listing.findById(listingId);
    if (sinlgeListing) {
      res.status(200).json(sinlgeListing);
    } else {
      res.status(400).json({ message: "No Listing found against this id" });
    }
    res.status(200).json(sinlgeListing);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Fail to get Listings", error: error.message });
  }
});

module.exports = router;
