import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../pages/Layout";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import AddProjectsPage from "../pages/AddProjects";
import ContactForm from "../pages/ContactForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about-section" element={<AboutPage />} />
        <Route path="projects-section" element={<AddProjectsPage />} />
        <Route path="contact-section" element={<ContactForm />} />
      </Route>
    </>
  )
);

export default router;
