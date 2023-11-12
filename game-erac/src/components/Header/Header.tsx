import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

function Header() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  
  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  
  const performSearch = () => {
    
    console.log('Searching for:', searchInput);
  };

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <img src={logo} width={50} height={50} />
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              key="appendicite"
              onClick={() => navigate("/appendicite")}
              sx={{ mx: 2, color: "white", display: "block" }}
            >
              Appendicite
            </Button>
            <Button
              key="cesarienne"
              onClick={() => navigate("/appendicite")}
              sx={{ mx: 3, color: "white", display: "block" }}
            >
              Césarienne
            </Button>
            <Button
              key="scoliose"
              onClick={() => navigate("/appendicite")}
              sx={{ mx: 2, color: "white", display: "block" }}
            >
              Scoliose
            </Button>
          </Box>

          {}
          <TextField
            label="Search"
            variant="outlined"
            value={searchInput}
            onChange={handleSearchChange}
            sx={{ ml: 2, color: "white", background: "white" }}
            onKeyPress={(ev) => {
              if (ev.key === 'Enter') {
                performSearch();
                ev.preventDefault();
              }
            }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

