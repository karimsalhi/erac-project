import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useParams } from "react-router-dom";
import { qcm1, qcm2, qcm3 } from "../Data/QcmData/QcmData";
import { useEffect, useState } from "react";
import { Grid, ListItemButton, Typography } from "@mui/material";

type Qcm = {
  id: number;
  question: string;
  answers: Array<string>;
};

export default function Qcm() {
  const [qcm, setQcm] = useState<Qcm>({ id: 0, question: "", answers: [] });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const params = useParams();
  const id = params.id;
  useEffect(() => {
    if (id === "1") {
      setQcm(qcm1);
    } else if (id === "2") {
      setQcm(qcm2);
    } else if (id === "3") {
      setQcm(qcm3);
    }
  }, [id]);

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
      </List>
    </Grid>
  );
}
