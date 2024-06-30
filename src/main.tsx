import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Technology from "./pages/Technology.tsx";
import NotFound from "./components/NotFound.tsx";
import Pricing from "./pages/pricing.tsx";
import Chatbot from "./components/Chatbot.tsx";
import About from "./pages/about.tsx";
import Login from "./pages/login.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";
import Blog from "./pages/Blog.tsx";
import BlogList from "./components/BlogList.tsx";
import Contact from "./pages/contact.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="370357882485-ruiednd7plrsmn91kjp4vdcp53ivmuvc.apps.googleusercontent.com">
    <React.StrictMode>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blogs/:id" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
