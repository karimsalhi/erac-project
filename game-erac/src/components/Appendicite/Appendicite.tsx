import { Grid, List, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Appendicite() {
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
        <Typography>
        L'appendicectomie est une intervention chirurgicale qui consiste à retirer l'appendice, une petite structure en forme de tube située dans le bas de l'abdomen. Cet organe ne remplit aucune fonction essentielle, mais il peut parfois devenir enflammé et provoquer des douleurs.<br/><br/> L'opération vise à résoudre ce problème.

Pendant l'appendicectomie, vous serez endormi sous anesthésie générale, vous ne ressentirez donc aucune douleur ni inconfort. Le chirurgien pratiquera une petite incision dans votre abdomen pour accéder à l'appendice. Ensuite, il retirera l'appendice problématique <br/><br/>Montez dans l'aventure avec nous en répondant à ce Quizz et essaie de repondre au plus vite pour être parmi les meilleurs.<br/>
        </Typography>
        <Button onClick={() => navigate("/qcm/anxiety")}>Commencer Le Quizz</Button>
      </List>
    </Grid>
  );
}
