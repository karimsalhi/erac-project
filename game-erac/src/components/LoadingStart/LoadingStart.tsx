import { Grid, Typography } from "@mui/material";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useNavigate } from "react-router-dom";
import "./LoadingStart.css";

const renderTime = ({ remainingTime }) => {
  return (
    <div className="timer">
      <Typography variant="h4">Début dans</Typography>
      <Typography variant="h4">{remainingTime}</Typography>
      <Typography variant="h4">Secondes</Typography>
    </div>
  );
};

export default function LoadingStart() {
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
      <CountdownCircleTimer
        isPlaying
        duration={3}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[3, 2, 1, 0]}
        size={300}
        onComplete={() => {
          navigate("/qcm/1");
        }}
      >
        {renderTime}
      </CountdownCircleTimer>
    </Grid>
  );
}
