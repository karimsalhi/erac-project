import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "5%",
};

export default function CorrectionModal(id) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>La reponse</Button>
      {id.id === "1" && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Réponse correcte : Faible
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Explication
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Les complications suite à une appendicectomie sont rares. Dans la
              grande majorité des cas, les patients récupèrent rapidement et
              sans souci. En fait, plus de 95% des interventions se passent très
              bien, laissant les patients sans la moindre séquelle. Vous êtes
              entre de bonnes mains, et l'équipe médicale est là pour veiller à
              votre bien-être tout au long du processus.
            </Typography>
          </Box>
        </Modal>
      )}
      {id.id === "2" && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Réponse correcte : 30 minutes
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Explication
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              L'appendicectomie est habituellement une procédure rapide, prenant
              environ 30 minutes à 1 heure, soit à peine plus longue qu'une
              petite sieste. Pendant l'intervention, vous ne ressentirez aucune
              douleur ni inconfort. À votre réveil, vous serez pris en charge
              par une équipe attentionnée, et vous n'aurez aucune raison de vous
              inquiéter. Votre bien-être est notre priorité.
            </Typography>
          </Box>
        </Modal>
      )}
      {id.id === "3" && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Réponse correcte : 95%
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Explication
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              L'appendicectomie est une opération couramment réussie, avec un
              taux de réussite élevé.
            </Typography>
          </Box>
        </Modal>
      )}
    </div>
  );
}
