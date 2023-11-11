import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate, useParams } from "react-router-dom";
import { qcm1, qcm2 } from "../Data/QcmData/QcmData";
import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Grid,
  ListItemButton,
  Paper,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import CorrectionModal from "../CorrectionModal/CorrectionModal";
import { styled } from "@mui/material/styles";

type Qcm = {
  id: number;
  question: string;
  answers: Array<string>;
  correctAnswer: number;
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  maxWidth: 360,
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    boxShadow: theme.shadows[10],
  },
}));

export default function Qcm() {
  const navigate = useNavigate();
  const maxTime = 10;
  const [counter, setCounter] = useState(3);
  const [correct, setCorrect] = useState("");
  const [input, setInput] = useState("");
  const [qcm, setQcm] = useState<Qcm>({
    id: 0,
    question: "",
    answers: [],
    correctAnswer: 0,
  });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const params = useParams();
  const id = params.id;
  useEffect(() => {
    if (id === "1") {
      setCounter(maxTime);
      setCorrect("");
      setSelectedIndex(null);
      setQcm(qcm1);
    } else if (id === "2") {
      setCounter(maxTime);
      setCorrect("");
      setSelectedIndex(null);
      setQcm(qcm2);
    } else if (id === "3") {
      setSelectedIndex(null);
      setCounter(maxTime);
      setCorrect("");
    } else if (id === "4") {
      navigate("/qcm/anxiety-last");
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
    if (index == qcm.correctAnswer) {
      setCorrect("True");
      setCounter(0);
    } else {
      setCorrect("False");
    }
  };

  const handleInputClick = () => {
    if (input == "95") {
      setCorrect("True");
      setCounter(0);
    } else {
      setCorrect("False");
    }
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
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <StyledPaper elevation={3}>
          <List component="nav" aria-label="mailbox folders">
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
            {id !== "3" ? (
              <>
                <Typography variant="h4">{qcm.question}</Typography>
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
              </>
            ) : (
              <>
                <Typography variant="h4">
                  Quel est le taux de réussite d'une appendicectomie ?
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
                <Button
                  className="button-lower"
                  variant="contained"
                  color="primary"
                  onClick={handleInputClick}
                >
                  Soumettre
                </Button>
              </>
            )}
            {counter === 0 && (
              <>
                <CorrectionModal id={id} />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Suivant
                </Button>
              </>
            )}
            {correct === "True" && (
              <Alert severity="success">Bonne Réponse</Alert>
            )}
            {correct === "False" && (
              <Alert severity="error">Mauvaise Réponse</Alert>
            )}
          </List>
        </StyledPaper>
      </Box>
    </Grid>
  );
}
