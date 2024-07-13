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
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsConditions from "./pages/TermsConditions.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./app/store.tsx";
import PersonalWebsite from "./pages/personal-website.tsx";
import BusinessWebsite from "./pages/BusinessWebsite.tsx";
import ProjectManagment from "./pages/ProjectManagment.tsx";
import PaymetnIntegration from "./pages/PaymetnIntegration.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import AdminDashboard from "./pages/AdminDashboard.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
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
              <Route path="/personal-website" element={<PersonalWebsite />} />
              <Route path="/business-website" element={<BusinessWebsite />} />
              <Route path="/project-management" element={<ProjectManagment />} />
              <Route path="/payment-integration" element={<PaymetnIntegration />} />
              <Route path="/admin-dashboard" element={<AdminDashboard/>} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy_policy" element={<PrivacyPolicy />} />
              <Route path="/terms_conditions" element={<TermsConditions />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Chatbot />
        </BrowserRouter>
      </React.StrictMode>
    </GoogleOAuthProvider>
  </Provider>
);
