import { Grid, List, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Appendicite() {
  const navigate = useNavigate();

  return (
    <Grid
      container
      sx={{
        height: '100vh',
        backgroundImage: `url("../../../assets/game5.png")`,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <List
        sx={{
          width: '100%',
          maxWidth: { xs: '90%', sm: 600 },
          bgcolor: 'background.paper',
          borderRadius: 3,
          boxShadow: 3,
          padding: 4,
          overflow: 'hidden',
        }}
        component="nav"
        aria-label="information"
      >
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 3 }}>
          Appendicite Information
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify', marginBottom: 3 }}>
        L'appendicectomie est une intervention chirurgicale qui consiste à retirer l'appendice, une petite structure en forme de tube située dans le bas de l'abdomen. Cet organe ne remplit aucune fonction essentielle, mais il peut parfois devenir enflammé et provoquer des douleurs.<br/><br/> L'opération vise à résoudre ce problème.
Pendant l'appendicectomie, vous serez endormi sous anesthésie générale, vous ne ressentirez donc aucune douleur ni inconfort. Le chirurgien pratiquera une petite incision dans votre abdomen pour accéder à l'appendice. Ensuite, il retirera l'appendice problématique <br/><br/>Montez dans l'aventure avec nous en répondant à ce Quizz et essaie de repondre au plus vite pour être parmi les meilleurs.<br/>
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate("/qcm/anxiety")}
          sx={{
            marginTop: 3,
            padding: '10px 25px',
          }}
        >
          Commencer Le Quiz
        </Button>
      </List>
    </Grid>
  );
}


