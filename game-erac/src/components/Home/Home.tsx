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
        className="home-grid"
        sx={{
          spacing: 0,
          direction: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        style={{ minHeight: "70vh" }}
      >
        <List
          className="question-list"
          component="nav"
          aria-label="mailbox folders"
        >
          <Typography variant="h4" className="question-title">
            Type d'intervention
          </Typography>
          <ListItemButton
            className="question-button"
            onClick={() => navigate("/appendicite")}
          >
            <ListItemText primary="Appendicite" />
          </ListItemButton>
          <ListItemButton
            className="question-button"
            onClick={() => navigate("/appendicite")}
          >
            <ListItemText primary="Césarienne" />
          </ListItemButton>
          <ListItemButton
            className="question-button"
            onClick={() => navigate("/appendicite")}
          >
            <ListItemText primary="Scoliose" />
          </ListItemButton>
        </List>
      </Grid>
    </div>
  );
}
