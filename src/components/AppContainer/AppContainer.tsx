import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout.tsx";
import HomeRoute from "../../routes/HomeRoute.tsx";
import CodeRoute from "../../routes/CodeRoute.tsx";
import MusicRoute from "../../routes/MusicRoute.tsx";
import CatsRoute from "../../routes/CatsRoute.tsx";
import ResumeRoute from "../../routes/ResumeRoute.tsx";
import AboutRoute from "../../routes/AboutRoute.tsx";
import ContactMeRoute from "../../routes/ContactMeRoute.tsx";
import NotFoundRoute from "../../routes/NotFoundRoute.tsx";

const routes = [
  { label: "Code", path: "/code", element: <CodeRoute /> },
  { label: "Music", path: "/music", element: <MusicRoute /> },
  { label: "Cats", path: "/cats", element: <CatsRoute /> },
  { label: "Resume", path: "/resume", element: <ResumeRoute /> },
  { label: "About", path: "/about", element: <AboutRoute /> },
  { label: "Contact Me", path: "/contact", element: <ContactMeRoute /> },
];

const AppContainer = () => {
  return (
    <Routes>
      <Route key="/" path="/" element={<AppLayout routes={routes} />}>
        <Route key="index" index element={<HomeRoute />} />
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route key="*" path="*" element={<NotFoundRoute />} />
      </Route>
    </Routes>
  );
};

export default AppContainer;
