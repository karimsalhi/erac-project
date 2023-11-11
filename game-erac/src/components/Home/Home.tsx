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
        style={{ minHeight: "100vh" }}
      >
        <List
            className="question-list"
          component="nav"
          aria-label="mailbox folders"
        >
          <Typography variant="h2" className="question-title">Choisis ton thème</Typography>
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