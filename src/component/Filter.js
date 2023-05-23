import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { Highttolow, rating } from "./atoms";
import { useAtom } from "jotai";

const Filter = () => {
  const [hightolowprod, setHightolowprod] = useAtom(Highttolow);
  const [productbyrating, setProductbyrating] = useAtom(rating);

  return (
    <>
      <ButtonGroup vertical>
        <span>Price</span>
        <Button onClick={() => setHightolowprod(!hightolowprod)}>
          {hightolowprod ? "High to Low" : "Low to High"}
        </Button>

        <span>Rating</span>
        <Button
          onClick={() => {
            setProductbyrating(!productbyrating);
          }}
        >
          {productbyrating ? "Low to high" : "high to Low"}
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Filter;
