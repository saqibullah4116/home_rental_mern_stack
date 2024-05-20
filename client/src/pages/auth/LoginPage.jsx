import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../redux/state";
import { useDispatch } from "react-redux";
import Alert from "@mui/material/Alert";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const loggedIn = await response.json();
      if (response.status >= 400) {
        setError(loggedIn.message);
      }

      if (response.ok) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );
        navigate("/");
      }
    } catch (error) {
      console.log(`log in  filed: ${error}`);
    }
  };
  useEffect(() => {
    setError("");
  }, [email, password]);

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
        <Box mt={2} />
        <TextField
          type="email"
          label="Email"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="standard"
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: { color: "white" },
          }}
        />
        <Box mt={2} />
        <Button
          onClick={handleSubmit}
          variant="contained"
          size="medium"
          sx={{
            color: "black",
            backgroundColor: "white",
          }}
        >
          Login
        </Button>

        <Box mt={1} />
        <Button
          onClick={() => {
            navigate("/register");
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
          Don't have an account, Register here
        </Button>
        <Box mt={1} />
        {error && (
          <Alert variant="filled" severity="error">
            {error}
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default LoginPage;
