import {
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import "../Home/Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="Home">
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
          <Typography variant="h2">Question</Typography>
          <ListItemButton
            sx={{ marginTop: "2rem" }}
            onClick={() => navigate("/appendicite")}
          >
            <ListItemText primary="Appendicite" />
          </ListItemButton>
          <ListItemButton
            sx={{ marginTop: "2rem" }}
            onClick={() => navigate("/appendicite")}
          >
            <ListItemText primary="Sodomie" />
          </ListItemButton>
          <ListItemButton
            sx={{ marginTop: "2rem" }}
            onClick={() => navigate("/appendicite")}
          >
            <ListItemText primary="Fellation" />
          </ListItemButton>
        </List>
      </Grid>
    </div>
  );
}
