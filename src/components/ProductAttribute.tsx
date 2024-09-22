import { Grid2 as Grid } from "@mui/material";
import styled from "styled-components";

const Attribute = styled.div`
  text-align: right;
  font-size: 12px;
  color: var(--clr-white);
  opacity: 0.6;
`;

const AttValue = styled.div`
  text-align: left;
  color: var(--clr-white);
  font-size: 12px;
`;

interface ProductAttributeProps {
  attribute?: string;
  attValue?: string;
}

export function ProductAttribute(props: ProductAttributeProps) {
  const { attribute, attValue } = props;
  if (!attribute || !attValue) return
  return (
    <>
      <Grid size={{ xs: 6, lg: 3}}>
        <Attribute>{attribute}</Attribute>
      </Grid>
      <Grid size={{ xs: 6, lg: 9}}>
        <AttValue>{attValue}</AttValue>
      </Grid>
    </>
  );
}
