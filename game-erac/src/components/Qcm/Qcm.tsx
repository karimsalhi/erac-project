import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate, useParams } from "react-router-dom";
import { qcm1, qcm2, qcm3 } from "../Data/QcmData/QcmData";
import { useEffect, useState } from "react";
import { Button, Grid, ListItemButton, Typography } from "@mui/material";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import CorrectionModal from "../CorrectionModal/CorrectionModal";

type Qcm = {
  id: number;
  question: string;
  answers: Array<string>;
};

export default function Qcm() {
  const navigate = useNavigate();
  const maxTime = 2;
  const [counter, setCounter] = useState(3);
  const [qcm, setQcm] = useState<Qcm>({ id: 0, question: "", answers: [] });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const params = useParams();
  const id = params.id;
  useEffect(() => {
    if (id === "1") {
      setCounter(maxTime);
      setQcm(qcm1);
    } else if (id === "2") {
      setCounter(maxTime);
      setQcm(qcm2);
    } else if (id === "3") {
      setCounter(maxTime);
      setQcm(qcm3);
    }
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [id]);

  const handleNext = () => {
    navigate(`/qcm/${parseInt(id) + 1}`);
  };
  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

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
        }}
        component="nav"
        aria-label="mailbox folders"
      >
        {counter > 0 && (
          <CountdownCircleTimer
            isPlaying
            duration={maxTime}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[(maxTime * 3) / 4, maxTime / 2, maxTime / 4, 0]}
            size={100}
            onComplete={() => {
              setCounter(0);
              return;
            }}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        )}
        <Typography variant="h2">{qcm.question}</Typography>
        {qcm.answers.map((answer, index) => (
          <ListItemButton
            key={index}
            sx={{ marginTop: "2rem" }}
            selected={selectedIndex === index}
            onClick={(event) => handleClick(event, index)}
          >
            <ListItemText primary={answer} />
          </ListItemButton>
        ))}
        {counter === 0 && (
          <>
            <CorrectionModal />
            <Button onClick={handleNext}>Suivant</Button>
          </>
        )}
      </List>
    </Grid>
  );
}
