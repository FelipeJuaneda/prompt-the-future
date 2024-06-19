import { createContext, useState, useContext, useEffect } from "react";
import {
  loginRequest,
  logoutRequest,
  registerRequest,
  requestPasswordReset,
  resetPassword,
  verifyTokenRequest,
  updateProfileRequest,
} from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [redirectAfterLogin, setRedirectAfterLogin] = useState("");

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
      return res.data;
    } catch (error) {
      setErrors(error.response.data);
      throw error;
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
      return res.data;
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        setErrors(error.response.data);
      } else {
        setErrors([error.response.data.message || error.response.data]);
      }
      throw error;
    }
  };

  const logout = async () => {
    try {
      await logoutRequest();
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      console.log("error", error);
    }
  };

  const requestPasswordResetFunction = async (email) => {
    try {
      await requestPasswordReset(email);
    } catch (error) {
      setErrors([error.response.data.message || error.response.data]);
      throw error;
    }
  };

  const resetPasswordFunction = async (token, newPassword) => {
    try {
      await resetPassword(token, newPassword);
    } catch (error) {
      setErrors([error.response.data.message || error.response.data]);
      console.log(error);
      throw error;
    }
  };

  const updateProfile = async (userData) => {
    try {
      const res = await updateProfileRequest(userData);
      setUser(res.data);
      return res.data;
    } catch (error) {
      setErrors([error.response.data.message || error.response.data]);
      throw error;
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      try {
        const cookies = Cookies.get();
        const res = await verifyTokenRequest(cookies.token);
        if (!res) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }
        setIsAuthenticated(true);
        setUser(res.data);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signup,
        signin,
        logout,
        requestPasswordResetFunction,
        resetPasswordFunction,
        updateProfile,
        errors,
        loading,
        setRedirectAfterLogin,
        redirectAfterLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
