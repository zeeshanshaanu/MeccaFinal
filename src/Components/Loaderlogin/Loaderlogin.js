import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
export default function LoaderLog({ className }) {
  return (
    <Box className="boxloader">
      <CircularProgress size={50} className={className} />
    </Box>
  );
}
