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
import ServicesPage from "../pages/Services";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about-section" element={<AboutPage />} />
        <Route path="projects-section" element={<AddProjectsPage />} />
        <Route path="contact-section" element={<ContactForm />} />
        <Route path="services-section" element={<ServicesPage />} />
      </Route>
    </>
  )
);

export default router;
