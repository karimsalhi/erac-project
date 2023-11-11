import { Box, Button, Grid, List, Slider, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const navigate = useNavigate();
  return (
    <Grid
      container
      sx={{
        spacing: 0,
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      style={{ minHeight: "100vh" }}
    >
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          borderRadius: "5%",
        }}
        component="nav"
        aria-label="mailbox folders"
      >
        <Box sx={{ width: 300 }}>
          <Typography variant="h6">
            Votre score est de
            <Typography
              variant="h5"
              color="orange"
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              945
            </Typography>
            Bravo vous faites partie du top
            <Typography variant="h5" color="purple">
              15%
            </Typography>
          </Typography>
        </Box>
        <Button onClick={() => navigate("/")}>Aller au menu</Button>
      </List>
    </Grid>
  );
}
