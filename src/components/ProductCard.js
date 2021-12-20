import React, { useContext } from "react";
import { shape, object, string, number } from "prop-types";

import ItemCard from "./generic/ItemCard";
import ProductVol from "./specific/ProductVol";

import ModalContext from "../contexts/ModalContext";

const ProductCard = ({ productInfo }) => {
  const { image_url, name, abv, volume, ingredients_short } = productInfo;
  const { setProductModal } = useContext(ModalContext);
  const setModalShow = show => setProductModal({ productInfo, show });

  const detail1 = <ProductVol {...{ abv, volume, name }} />;

  return (
    <ItemCard
      {...{
        setModalShow,
        header: name,
        image_url,
        detail1,
        detail2: ingredients_short,
        productInfo
      }}
    />
  );
};

ProductCard.propTypes = {
  productInfo: shape({
    image_url: string,
    name: string,
    abv: number,
    volume: object,
    ingredients_short: string
  })
};
export default ProductCard;
