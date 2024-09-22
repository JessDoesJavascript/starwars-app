import styled from "styled-components";
import { Starship } from "../domain/model";
import { Button, Grid2 as Grid } from "@mui/material";
import "../index.css";
import { ProductAttribute } from "./ProductAttribute";
import { StyledPaper } from "./uiComponents";
import { useState } from "react";


const Name = styled.h1`
  text-transform: capitalize;
  color: var(--clr-yellow);
  font-size: 20px;
`;

const CounterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  background-color: #000;
  margin: 24px;
  border-radius: 8px;
`;
const Counter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  background-color: #000;
  border-radius: 8px;
`;

const PlusMinusButton = styled(Button)`
  color: var(--clr-white);
  font-size: 20px;
  padding: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 30px;
`;

const NumberDisplay = styled.div`
  color: var(--clr-yellow);
  font-size: 20px;
  background-color: #000;
  font-family: "SF Distant Galaxy Regular";
  width: 30px;
  text-align: center;
`;

const AddToCartButton = styled(Button)`
  font-family: "SF Distant Galaxy Long Outline Italic";
  color: var(--clr-white);
  font-size: 16px;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface ProductCardProps {
  starship: Starship;
  addToCartFn: (message: string) => void;
}


export function ProductCard(props: ProductCardProps) {
  const { starship, addToCartFn } = props;
  const [number, setNumber] = useState(1);

  const updateNumber = (direction: "plus" | "minus") => {
    if (direction === "plus") {
      setNumber(number + 1);
    }
    if (direction === "minus" && number > 0) {
      setNumber(number - 1);
    }
  };

  const handleAddToCartClick = () => {
    addToCartFn(`Added ${number} ${starship.name}(s) to cart`)
  }
  return (
    <StyledPaper data-testid="product-card">
      <Name>{starship.name}</Name>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <ProductAttribute attribute="Model" attValue={starship.model} />
        <ProductAttribute attribute="Crew" attValue={starship.crew} />
        <ProductAttribute
          attribute="Hyperdrive"
          attValue={starship.hyperdrive_rating}
        />
        <ProductAttribute
          attribute="Cost"
          attValue={`${starship.cost_in_credits}`}
        />
      </Grid>
      <CounterWrapper>
        <Counter>
          <PlusMinusButton
            data-testid="minus-button"
            onClick={() => updateNumber("minus")}
          >
            -
          </PlusMinusButton>
          <NumberDisplay id="number-of-items" data-testid="number-of-items">
            {number}
          </NumberDisplay>
          <PlusMinusButton
            data-testid="plus-button"
            onClick={() => updateNumber("plus")}
          >
            +
          </PlusMinusButton>
        </Counter>
        <AddToCartButton onClick={handleAddToCartClick}>Add to cart</AddToCartButton>
      </CounterWrapper>
    </StyledPaper>
  );
}
