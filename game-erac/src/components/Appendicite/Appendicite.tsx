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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          at erat eu ipsum molestie elementum sed ut nunc. Donec et tellus ut
          massa viverra placerat eu et nibh. Morbi condimentum ipsum vitae velit
          sollicitudin blandit. Phasellus in lorem odio. Quisque nec velit
          lobortis arcu pretium iaculis dignissim nec justo. Nam nunc ante,
          tincidunt et mollis vel, sagittis at neque. Sed dignissim, erat ac
          malesuada commodo, tortor ex viverra nulla, non tempor nulla turpis
          non quam. Nullam et viverra ipsum. Curabitur porta sem vel velit
          placerat, vel blandit augue dapibus. Phasellus porta accumsan risus,
          in lacinia urna accumsan sit amet. Cras malesuada pharetra leo, ut
          ultrices odio pulvinar eu. Integer venenatis malesuada urna, sit amet
          sodales turpis pharetra ac. Donec arcu tortor, vestibulum et justo
          quis, imperdiet feugiat augue. Vestibulum finibus ante eget justo
          iaculis scelerisque. Curabitur molestie elementum neque a facilisis.
          Donec consectetur purus et volutpat posuere. Aenean at interdum nisl.
          Ut pharetra justo elit, ut suscipit mi facilisis eget. Nam mi ex,
          vulputate vel tortor bibendum, tempus ornare eros. Donec varius augue
          congue dolor semper tempus aliquet ut magna. Etiam mollis metus nec
          libero interdum, quis cursus elit rutrum. Donec lacinia sapien eu
          purus vehicula convallis. Sed porttitor venenatis justo ut laoreet.
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
          Commencer
        </Button>
      </List>
    </Grid>
  );
}


