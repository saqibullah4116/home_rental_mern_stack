import { Avatar, Box, Button, Container, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormDate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: undefined,
  });

  const handlChange = (e) => {
    const { name, value, files } = e.target;
    setFormDate({
      ...formData,
      [name]: value,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };
  console.log(formData);
  const [passwordMatch, setPasswordMatch] = useState(true);

  useEffect(() => {
    setPasswordMatch(
      formData.password === formData.confirmPassword ||
        formData.confirmPassword === ""
    );
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      const register_form = new FormData();

      for (var key in formData) {
        register_form.append(key, formData[key]);
      }
      const response = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        body: register_form,
      });
      if (response.ok) {
        navigate("/login");
      }
    } catch (error) {
      console.log(`registratioin filed: ${error}`);
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${"https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        // width={"30%"}
        padding={2}
        paddingLeft={4}
        paddingRight={4}
        borderRadius={8}
        sx={{
          width: { xs: "100%", sm: "50%", md: "30%" },
          backgroundColor: "rgba(0, 0,0, 0.8)",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0px 4px 8px rgba(255, 255, 255, 1)",
        }}
      >
        <TextField
          id="first_name"
          label="First Name"
          variant="standard"
          name="firstName"
          value={formData.firstName}
          onChange={handlChange}
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: { color: "white" },
          }}
        />
        <Box mt={2} />
        <TextField
          id="last_name"
          label="Last Name"
          variant="standard"
          name="lastName"
          value={formData.lastName}
          onChange={handlChange}
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: { color: "white" },
          }}
        />
        <Box mt={2} />
        <TextField
          type="email"
          id="email"
          label="Email"
          variant="standard"
          name="email"
          value={formData.email}
          onChange={handlChange}
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: { color: "white" },
          }}
        />
        <Box mt={2} />
        <TextField
          type="password"
          id="password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handlChange}
          variant="standard"
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: { color: "white" },
          }}
        />
        <Box mt={2} />
        <TextField
          type="password"
          id="confirm password"
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handlChange}
          variant="standard"
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: { color: "white" },
          }}
        />
        {!passwordMatch && (
          <p style={{ color: "red" }}>
            Password and confirm password didn't matched
          </p>
        )}
        <Box mt={2} />
        {formData.profileImage && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              cursor: "pointer",
            }}
          >
            <Avatar
              alt="Travis Howard"
              sx={{ width: 56, height: 56 }}
              src={URL.createObjectURL(formData.profileImage)}
            />
            <Box mt={2} />
          </div>
        )}
        <input
          id="image"
          type="file"
          name="profileImage"
          onChange={handlChange}
          accept="image/*"
          style={{ display: "none" }}
        />
        <label
          htmlFor="image"
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            cursor: "pointer",
          }}
        >
          <CloudUploadIcon />
          <p>Upload Profile image</p>
        </label>
        <Button
          disabled={!passwordMatch}
          onClick={handleSubmit}
          variant="contained"
          size="medium"
          sx={{
            color: "black",
            backgroundColor: "white",
          }}
        >
          Register
        </Button>

        <Box mt={1} />
        <Button
          onClick={() => {
            navigate("/login");
          }}
          variant="text"
          size="medium"
          sx={{
            color: "white",
            textTransform: "none",
            "&:hover": {
              background: "none",
            },
          }}
        >
          Already have an account, Login instead
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterPage;
