import { Box } from "@mui/material";
import HomeMainPanel from "../components/Home/HomeMainPanel.tsx";
import HomeScenePanel from "../components/Home/HomeScenePanel.tsx";

const HomeRoute = () => {
  return (
    <Box component="div" height="100%" display="flex" flexDirection="row">
      <Box component="div" className="route-box" width="60%">
        <HomeMainPanel />
      </Box>
      <Box component="div" display="flex" flexGrow={1}>
        <HomeScenePanel />
      </Box>
    </Box>
  );
};

export default HomeRoute;
