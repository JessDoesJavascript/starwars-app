import { Button } from "@carbon/react";
import styled from "styled-components";
import { Starship } from "../domain/model";
import Grid from "@mui/material/Grid2";
import { ProductCard } from "./ProductCard";
import { StyledPaper } from "./uiComponents";
import { Snackbar } from "@mui/material";
import { useState } from "react";

interface ProductListingsProps {
  starships: Starship[];
  handleSeeMoreClick: () => void;
  noMoreStarships: boolean;
}
const StyledButton = styled(Button)`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "SF Distant Galaxy Regular";
  background-color: var(--clr-space);
  border: none;
  cursor: pointer;
  color: var(--clr-beige);
  font-size: 20px;
`;
const StyledSnackbar = styled(Snackbar)`
  border: 2px solid var(--clr-yellow);
  border-radius: 4px; 
  .MuiSnackbarContent-message {
    font-family: "SF Distant Galaxy Regular";
    color: var(--clr-white);
  }
`;

export function ProductListings(props: ProductListingsProps) {
  const { starships, handleSeeMoreClick, noMoreStarships } = props;
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const openSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
    setSnackbarMessage("");
  };
  return (
    <>
      <Grid container spacing={2}>
        {starships.map((starship, index) => {
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
              <ProductCard starship={starship} addToCartFn={openSnackbar} />
            </Grid>
          );
        })}
        {!noMoreStarships ? (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ width: "100%" }}>
            <StyledPaper>
              <StyledButton onClick={handleSeeMoreClick}>
                See more...
              </StyledButton>
            </StyledPaper>
          </Grid>
        ) : null}
      </Grid>
      <StyledSnackbar
        open={snackbarOpen}
        onClose={closeSnackbar}
        autoHideDuration={4000}
        message={snackbarMessage}
      />
    </>
  );
}
