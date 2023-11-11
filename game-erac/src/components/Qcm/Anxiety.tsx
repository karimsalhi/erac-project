import {
  Grid,
  List,
  Typography,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Anxiety() {
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
        <Typography variant="h3">Votre Anxiety</Typography>
        {levels.map((answer, index) => (
          <ListItemButton
            key={index}
            sx={{ marginTop: "1rem" }}
            onClick={() => navigate("/qcm/1")}
          >
            <ListItemText primary={answer} />
          </ListItemButton>
        ))}
      </List>
    </Grid>
  );
}
