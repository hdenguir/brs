import React, { useContext, useState } from "react";
import { func, number } from "prop-types";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/Inputgroup";

import LoadingContext from "../../contexts/LoadingContext";

const ProductNavBar = ({ setFilter, page }) => {
  const isLoading = useContext(LoadingContext);
  const [input, setInput] = useState("");
  const [parsedInput, setParsedInput] = useState("");

  const parseInput = e => {
    const safeValue = e.target.value
      .replace(/[^0-9a-z-A-Z ]/g, "")
      .replace(/ +/, " ");
    setInput(safeValue);
  };

  const preventSubmit = e => {
    e.preventDefault();
    setFilter({ beerName: input });
    setParsedInput(input);
  };

  return (
    <Navbar className="justify-content-between">
      <h2 className="lead">
        {parsedInput.length > 0
          ? 'Search Results: "' + parsedInput + '"'
          : "Available Products"}
      </h2>

      <Form onSubmit={preventSubmit}>
        <InputGroup className="mb-3">
          <FormControl
            type="text"
            placeholder="Search"
            className=" mr-sm-2"
            onChange={e => parseInput(e)}
            disabled={isLoading}
          />
        </InputGroup>
      </Form>
    </Navbar>
  );
};

ProductNavBar.propTypes = {
  setFilter: func,
  page: number
};

export default ProductNavBar;
