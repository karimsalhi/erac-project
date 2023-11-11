import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
  Paper,
  Box,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { qcm1, qcm2 } from '../Data/QcmData/QcmData';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import CorrectionModal from '../CorrectionModal/CorrectionModal';


type Qcm = {
  id: number;
  question: string;
  answers: Array<string>;
  correctAnswer: number;
};

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
    if (input == "30") {
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
        minHeight: '100vh',
        padding: 2,
        backgroundImage: `url("../../../assets/game.png")`,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 500,
          my: 4,
          py: 4,
          px: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '5%',
        }}
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
        <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 'medium', color: 'primary.main', mb: 3 }}>
          {qcm.question}
        </Typography>
        <List component="nav" aria-label="quiz options" sx={{ width: '100%' }}>
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
        </List>
        {counter === 0 && (
          <>
            <CorrectionModal />
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              sx={{ mt: 3 }}
            >
              Suivant
            </Button>
          </>
        )}
        {correct !== "" && (
          <Alert severity={correct === "True" ? "success" : "error"} sx={{ mt: 3 }}>
            {correct === "True" ? "Bonne Réponse!" : "Mauvaise Réponse!"}
          </Alert>
        )}
      </Paper>
    </Grid>
  );
}
