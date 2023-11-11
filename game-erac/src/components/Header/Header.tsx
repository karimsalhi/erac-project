import logo from "../../assets/logo.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <img src={logo} width={50} height={50} />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
