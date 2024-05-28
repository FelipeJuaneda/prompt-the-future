import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Toaster } from "sonner";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import { CoursesProvider } from "./context/CoursesContext.jsx";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  palette: {
    primary: {
      main: "#2C2C2C",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "secondary.main",
            },
            "&:hover fieldset": {
              borderColor: "secondary.main",
            },
            "&.Mui-focused fieldset": {
              borderColor: "secondary.main",
            },
          },
          "& .MuiInputLabel-root": {
            color: "secondary.main",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "secondary.main",
          },
          "& .MuiInputBase-input": {
            color: "secondary.main",
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AuthProvider>
      <CoursesProvider>
        <HelmetProvider>
          <BrowserRouter>
            <App />
            <Toaster position="bottom-right" expand={true} richColors />
          </BrowserRouter>
        </HelmetProvider>
      </CoursesProvider>
    </AuthProvider>
  </ThemeProvider>
);
