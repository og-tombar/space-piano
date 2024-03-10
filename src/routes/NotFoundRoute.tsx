import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundRoute = () => {
  return (
    <Box component="div" className="route-box">
      <Typography>Error 404: Page not found!</Typography>
      <Link to="/">Go to the home page</Link>
    </Box>
  );
};

export default NotFoundRoute;
