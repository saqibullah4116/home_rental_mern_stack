import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { theme } from "./theme";
import CreateListing from "./pages/createListing/CreateListing";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import Homepage from "./pages/home/Homepage";
import ListingDetails from "./pages/listingDetails/ListingDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state?.user);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />}></Route>
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/properties/:listingId" element={<ListingDetails />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
