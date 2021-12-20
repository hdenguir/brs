import React, { useContext } from "react";

import ItemModal from "./generic/ItemModal";
import ProductVol from "./specific/ProductVol";
import ModalContext from "../contexts/ModalContext";

const ProductModal = () => {
  const { productModal, setProductModal } = useContext(ModalContext);
  const { show, productInfo } = productModal;
  const setModalShow = toShow =>
    setProductModal({ ...productModal, show: toShow });

  const {
    id,
    name,
    image_url,
    abv,
    volume,
    tagline,
    description,
    brewers_tips,
    ingredients_all
  } = productInfo;

  const detail1 = <ProductVol {...{ abv, volume }} />;
  const foodPairing = (productInfo.food_pairing || []).join(", ");

  return (
    <ItemModal
      {...{
        id,
        show,
        setModalShow,
        header: name,
        image_url,
        detail1,
        detail2: tagline,
        description,
        brewersTips: brewers_tips,
        ingredients_all: (ingredients_all || []).join(", "),
        foodPairing,
        productInfo
      }}
    />
  );
};

export default ProductModal;
