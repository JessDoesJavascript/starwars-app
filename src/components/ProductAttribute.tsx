import { Grid2 as Grid } from "@mui/material";
import styled from "styled-components";

const Attribute = styled.div`
  text-align: right;
  font-size: 14px;
  color: var(--clr-white);
  opacity: 0.6;
`;

const AttValue = styled.div`
  text-align: left;
  font-size: 14px;
  color: var(--clr-white);
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
      <Grid size={{ xs: 6, xl: 5}}>
        <Attribute>{attribute}</Attribute>
      </Grid>
      <Grid size={{ xs: 6, xl: 7}}>
        <AttValue>{attValue}</AttValue>
      </Grid>
    </>
  );
}
