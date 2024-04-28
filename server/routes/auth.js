const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");

const User = require("../models/User");

// configuration for multer to upload profile image
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// user register
router.post("/register", upload.single("profileImage"), async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const profileImage = req.file;
    if (!profileImage) {
      return res.status(400).send("No file uploaded");
    }
    // create path to upload file
    const profileImagePath = profileImage.path;

    // check if user already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }
    // hasing the password
    const salt = await bcrypt.genSalt();
    const hashpassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashpassword,
      profileImagePath,
    });
    // save the user
    await newUser.save();

    // sending a successful message
    res
      .status(200)
      .json({ message: "User register successfull", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "User registeration failed", Error: err });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User didn't exist" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ message: "Your credentials are not valid" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: `eror:${error}` });
  }
});

module.exports = router;
