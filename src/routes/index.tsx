import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../pages/Layout";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import AddProjectsPage from "../pages/AddProjects";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route index element={<AboutPage />} />
          <Route index element={<AddProjectsPage />} />
        </Route>
      </Route>
    </>
  )
);

export default router;
