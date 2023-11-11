import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useParams } from "react-router-dom";
import { qcm1, qcm2, qcm3 } from "../Data/QcmData/QcmData";
import { useEffect, useState } from "react";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

type Qcm = {
  id: number;
  question: string;
  answers: Array<string>;
};

export default function Qcm() {
  const [qcm, setQcm] = useState<Qcm>({ id: 0, question: "", answers: [] });
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

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      {qcm.answers.map((answer, index) => (
        <ListItem button key={index}>
          <ListItemText primary={answer} />
        </ListItem>
      ))}
    </List>
  );
}
