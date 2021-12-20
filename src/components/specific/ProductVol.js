import React from "react";

import { number, object } from "prop-types";

const ProductVol = ({ abv, volume }) => {
  const { value, unit } = volume || {};
  
  const abvJSX = (
    <span className="font-weight-bold">
      {abv}%
    </span>
  );
  const volJSX = (
    <span className="font-weight-bold">
      {value} - {unit.charAt(0).toUpperCase()}
    </span>
  );
  return value && value > 0 ? <>ABV {abvJSX} Size {volJSX}</> : null;
};

ProductVol.propTypes = {
  abv: number,
  volume: object
};

export default ProductVol;
