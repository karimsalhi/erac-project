import { Autocomplete, Grid, TextField } from "@mui/material";
import "../Home/Home.css";
import { useState } from "react";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const colorOptions = [
    "Cholécystectomie",
    "Appendicectomie",
    "Césarienne",
    "Arthroplastie",
    "Mastectomie",
    "Scoliose",
    "...",
  ];

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
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
      <Autocomplete
        freeSolo
        options={colorOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Recherche ton intervention"
            variant="outlined"
            value={searchInput}
            onChange={handleSearchChange}
            sx={{ ml: 2, color: "white", background: "white", width: 1000 }}
          />
        )}
      />
    </Grid>
  );
}
