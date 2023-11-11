import { Grid, List, Typography, Box, Slider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function valuetext(value: number) {
  return `${value}°C`;
}

export default function AnxietyLast() {
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
        <Typography variant="h3">Sur une échelle de 1 à 10 combien êtes-vous anxieux(se)?</Typography>
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Temperature"
            defaultValue={3}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
        </Box>
        <Button onClick={() => navigate("/result")}>Suivant</Button>
      </List>
    </Grid>
  );
}
