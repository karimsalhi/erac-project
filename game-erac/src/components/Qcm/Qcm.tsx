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
  Toolbar,
  InputAdornment,
} from "@mui/material";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import CorrectionModal from "../CorrectionModal/CorrectionModal";
import { styled } from "@mui/material/styles";
import PercentIcon from "@mui/icons-material/Percent";

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
      style={{ minHeight: "70vh" }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <StyledPaper
          elevation={3}
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "rgba(255, 255, 255, 0.85)",
            borderRadius: 2,
            boxShadow: 3,
            padding: 4,
            textAlign: "center",
          }}
        >
          <List component="nav" aria-label="mailbox folders">
            {counter > 0 && (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
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
              </Box>
            )}
            {id !== "3" ? (
              <>
                <Typography
                  variant="h4"
                  sx={{ textAlign: "center", marginTop: "1rem" }}
                >
                  {qcm.question}
                </Typography>
                {qcm.answers.map((answer, index) => (
                  <ListItemButton
                    key={index}
                    sx={{ marginTop: "1rem" }}
                    selected={selectedIndex === index}
                    onClick={(event) => handleClick(event, index)}
                  >
                    <ListItemText
                      primaryTypographyProps={{ fontSize: "1.125rem" }}
                      primary={answer}
                    />
                  </ListItemButton>
                ))}
              </>
            ) : (
              <>
                <Typography variant="h4">
                  Quel est le taux de réussite d'une appendicectomie ?
                </Typography>
                <TextField
                  sx={{ margin: "1rem" }}
                  id="outlined-basic"
                  label="Réponse"
                  variant="outlined"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PercentIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {counter > 0 && (
                  <Button
                    sx={{ margin: "1rem" }}
                    className="button-lower"
                    variant="contained"
                    color="primary"
                    onClick={handleInputClick}
                  >
                    Soumettre
                  </Button>
                )}
              </>
            )}
            {counter === 0 && (
              <Toolbar sx={{ justifyContent: "space-between" }}>
                <CorrectionModal id={id} />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Suivant
                </Button>
              </Toolbar>
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
