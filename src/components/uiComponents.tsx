import { Button, Paper } from "@mui/material";
import styled from "styled-components";

export const StyledPaper = styled(Paper)`
  height: 100%;
  background-color: var(--clr-space);
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PrimaryButton = styled(Button)`
  font-family: "SF Distant Galaxy Long";
  color: var(--clr-yellow);
  font-size: 16px;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 2px solid white; 
`;
