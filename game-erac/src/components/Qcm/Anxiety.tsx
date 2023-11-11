import { Grid, List, Typography, Box, Slider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function valuetext(value: number) {
  return `${value}°C`;
}

export default function Anxiety() {
  const navigate = useNavigate();
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        backgroundImage: `url("../../../assets/game.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "rgba(255, 255, 255, 0.85)",
          borderRadius: 2,
          boxShadow: 3,
          padding: 4,
          textAlign: "center",
        }}
        component="nav"
        aria-label="anxiety scale"
      >
        <Typography variant="h4" gutterBottom>
          Sur une échelle de 1 à 10, combien êtes-vous anxieux(se)?
        </Typography>
        <Box sx={{ width: 300, margin: "auto" }}>
          <Slider
            aria-label="Anxiety level"
            defaultValue={3}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/loading-start")}
          sx={{ marginTop: 4 }}
        >
          Suivant
        </Button>
      </List>
    </Grid>
  );
}
